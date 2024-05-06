//Dummy data
export const searchData : SearchData= {
  role: {
    isMulti: true,
    name: 'Role',
    options: [
      { value: 'backend', label: 'Backend' },
      { value: 'frontend', label: 'Frontend' },
      { value: 'android', label: 'Android' },
      { value: 'ios', label: 'IOS' },
      { value: 'flutter', label: 'Flutter' },
      { value: 'fullstack', label: 'Fullstack' },
      { value: 'devops', label: 'Devops' },
      { value: 'dataEngineer', label: 'Data Engineer' },
      { value: 'dataScience', label: 'Data Science' },
    ],
  },
  location: {
    isMulti: true,
    name: 'Location',
    options: [
      { value: 'Pune', label: 'Pune' },
      { value: 'Noida', label: 'Noida' },
      { value: 'Gurgaon', label: 'Gurgaon' },
      { value: 'Bangalore', label: 'Bangalore' },
      { value: 'Delhi', label: 'Delhi' },
      { value: 'India', label: 'India' },
    ],
  },
  remote: {
    isMulti: true,
    name: 'Remote/Office',
    options: [
      { value: 'remote', label: 'Remote' },
      { value: 'hybrid', label: 'Hybrid' },
      { value: 'office', label: 'In-Office' },
    ],
  },
  techStack: {
    isMulti: true,
    name: 'Tech Stack',
    options: [
      { value: 'React', label: 'React' },
      { value: 'Java', label: 'Java' },
      { value: 'Python', label: 'Python' },
      { value: 'Html/css', label: 'Html/css' },
      { value: 'JavaScript', label: 'JavaScript' },
      { value: 'MongoDb', label: 'MongoDb' },
      { value: 'TypeScript', label: 'TypeScript' },
    ],
  },
  minExperience: {
    isMulti: true,
    name: 'Min Experience',
    options: [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
      { value: '4', label: '4' },
      { value: '5', label: '5' },
      { value: '6', label: '6' },
      { value: '7', label: '7' },
      { value: '8', label: '8' },
      { value: '9', label: '9' },
    ],
  },
  minBasePay: {
    isMulti: true,
    name: 'Min BasePay',
    options: [
      { value: '10', label: '10L' },
      { value: '20', label: '20L' },
      { value: '30', label: '30L' },
      { value: '40', label: '40L' },
      { value: '50', label: '50L' },
      { value: '60', label: '60L' },
      { value: '70', label: '70L' },
      { value: '80', label: '80L' },
    ],
  },
  companyName: {
    name: 'Company Name',
    options: [],
    isMulti: false,
  },
};


interface Option {
  value: string;
  label: string;
}

interface FilterData {
  isMulti: boolean;
  name: string;
  options: Option[] | any;
}

export interface SearchData {
  role: FilterData;
  companyName: FilterData;
  location: FilterData;
  remote: FilterData;
  techStack: FilterData;
  minExperience: FilterData;
  minBasePay: FilterData;
}