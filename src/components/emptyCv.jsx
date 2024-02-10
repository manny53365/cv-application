import { v4 as uuidv4 } from 'uuid';

const emptyCv = {
  personalInfo: {
    fName: '',
    lName: '',
    title: '',
    photo: null,
    address: '',
    phone: '',
    email: '',
    intro: ''
  },
  education: [
    {
        id: uuidv4(),
        uniName: '',
        city: '',
        degree: '',
        subject: '',
        fromDate: '',
        toDate: ''
    },
  ],
  experience: [
    {
        id: uuidv4(),
        company: '',
        city: '',
        role: '',
        fromDate: '',
        toDate: ''
    },
  ]
}

export default emptyCv