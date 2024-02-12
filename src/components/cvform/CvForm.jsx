import { useState } from 'react';
import PersonalInfo from './pages/personalInfo/PersonalInfo';
import WorkExperience from './pages/experience/WorkExperience';
import Education from './pages/education/Education';
import emptyCv from '../emptyCv';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../Button';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

export default function CvForm() {

    const [cv, setCV] = useState(emptyCv);

    const handlePersonalInfoChange = event => {
        const {name, type, value} = event.target;

        if (type === 'file') {
            handleImage(event);
        }

        setCV((prevState) => ({
            ...prevState,
            personalInfo: {
                ...prevState.personalInfo,
                [name]: value,
            },
        }))
    };

    const handleImage = event => {
        let img = event.target.files[0];
        if (!img) return;
        console.log(img);

        const reader = new FileReader();
        reader.onload = () => {
            setCV((prevState) => ({
              ...prevState,
              personalInfo: {
                ...prevState.personalInfo,
                [event.target.name]: reader.result,
              },
            }))
          }
          reader.readAsDataURL(img)
    };

    const handleExperienceChange = (event, id) => {
        const { name, value } = event.target;

        setCV((prevState) => {
            const newJob = prevState.experience.map(job => {
                if (job.id === id) {
                    return {...job, [name]: value}
                }
                return job;
            })
            return {...prevState, experience: [...newJob]}
        });
    };

    const handleAddExperience = () => {
        setCV((prevState) => ({
            ...prevState,
            experience: [
                ...prevState.experience,
                {
                    id: uuidv4(),
                    company: '',
                    city: '',
                    role: '',
                    fromDate: '',
                    toDate: ''
                }
            ]
        }))
    };

    const handleDeleteExperience = id => {
        setCV((prevState) => {
            const updatedExperience = prevState.experience.filter(job => job.id != id);
            return {...prevState, experience: [...updatedExperience]}
        })
    };

    const handleEducationChange = (event, id) => {
        const { name, value } = event.target;

        setCV((prevState) => {
            const updatedEducation = prevState.education.map((edu) => {
                if (edu.id === id) {
                    return {...edu, [name]: value}
                }
                return edu
            })
            return {...prevState, education: [...updatedEducation]}
        })
    };

    const handleAddEducation = () => {
        setCV(prevState => ({
            ...prevState,
            education: [
                ...prevState.education,
                {
                    id: uuidv4(),
                    uniName: '',
                    city: '',
                    degree: '',
                    subject: '',
                    fromDate: '',
                    toDate: ''
                },
            ]
        }))
    };

    const handleDeleteEducation = id => {
        setCV(prevState => {
            const updatedEducation = prevState.education.filter(edu => edu.id != id);
            return {...prevState, education: [...updatedEducation]}
        })
    };

    const generatePDF = async () => {
        const input = document.getElementById('cv-form');
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
              orientation: "portrait",
            });
            const imgProps= pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${cv.personalInfo.fName}-${cv.personalInfo.lName}-cv.pdf`);
        });
    }

    const clearFields = () => {
        setCV(emptyCv);
    };

    const handleSubmit = event => {
        event.preventDefault();
    };

  return (
    <form id='cv-form' onSubmit={handleSubmit}>
        <PersonalInfo
        personalInfo={cv.personalInfo}
        handlePersonalInfoChange={handlePersonalInfoChange}
        />
        <WorkExperience 
        experience={cv.experience}
        handleExperienceChange={handleExperienceChange}
        handleAddExperience={handleAddExperience}
        handleDeleteExperience={handleDeleteExperience}
        />
        <Education
        education={cv.education}
        handleEducationChange={handleEducationChange}
        handleAddEducation={handleAddEducation}
        handleDeleteEducation={handleDeleteEducation}
        />
        <div className="form-btn-container">
            <Button text='Generate CV' onClick={generatePDF}/>
            <Button text='Clear form' onClick={clearFields}/>
        </div>
    </form>
  )
}
