import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/Footer/footer';
import Content from '../../components/Content/Content';
import Swal from 'sweetalert2';

const careerInfoMap = {
  informaticstechnician: {
    title: 'Informatics Technician Student',
    description: 'I Have started to study technology very young, in secondary schools i started a 3year course in informatics.',
  },
  techsupport: {
    title: 'Tech Support',
    description: 'My first job in Ti was with tech support with Windows Server and TOTVS Management Business System.',
  },
  technologiststudent: {
    title: 'Tecnologist in Web Development Student',
    description: 'When i graduated as informatics technician i started a technologist degree in web development.',
  },
  jrbackend: {
    title: 'Jr. Backend & Desktop Developer',
    description: 'After i finished my technician course i started as a Jr Backend Developer in Merito Engenharia de Software.',
  },
  midbackend: {
    title: 'Mid. Backend & Desktop Developer',
    description: 'After i finished my degree in web development i got promoted to mid level developer.',
  },
  fullstackangular: {
    title: 'Fullstack Angular + Java Developer',
    description: 'After a year in Merito Engenharia de Software i feel i couldnt grow anymore in the company, i received a new opportunity as a fullstack developer from SMagalhães logistics and portuary company from Santos - Brazil.',
  },
  newchallenge: {
    title: 'Looking for a new challenge',
    description: 'Now i am looking for a new opportunity, i am really glad you read until here, a big thank you for your time.',
  },
};

const carrerInfos = (type) => {
  const careerInfo = careerInfoMap[type];
  if (careerInfo) {
    Swal.fire(careerInfo.title, careerInfo.description, 'info');
  }
};

const about = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      <Content>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About</h1>

          <div className="w-100vh h-40 mb-4">
            <img
              src="bg-about.jpg"
              alt="this photo was in a most beaultiful place i ever been in Sapiranga - Brazil."
              className="w-full h-full "
            />
          </div>

          
          <p className="text-lg text-justify mb-4">
            <strong>About me: </strong>
            Beyond the Professional
            I'm a very communicative person, happy and sociable,
            love to speak and share funny stories,
            love nature, barbecues and my pets.
          </p>

          <p className='text-lg mb-4'>My Career Time-Lapse:</p>

          <ul className="steps text-center mx-auto">
            <li className="step step-primary"><a onClick={() => carrerInfos("informaticstechnician")}>Informatics Technician Student</a></li>
            <li className="step step-primary"><a onClick={() => carrerInfos("techsupport")}>Tech Support</a></li>
            <li className="step step-primary"><a onClick={() => carrerInfos("technologiststudent")}>Tecnologist in Web Development Student</a></li>
            <li className="step step-primary"><a onClick={() => carrerInfos("jrbackend")}>Jr. Backend & Desktop Developer</a></li>
            <li className="step step-primary"><a onClick={() => carrerInfos("midbackend")}>Mid. Backend & Desktop Developer</a></li>
            <li className="step step-primary"><a onClick={() => carrerInfos("fullstackangular")}>Fullstack Angular + Spring Java  Developer</a></li>
            <li className="step"><a onClick={() => carrerInfos("newchallenge")}>Looking for a new challenge</a></li>
          </ul>
        </div>
      </Content>

 
      <Footer />
    </div>
  );
};

export default about;
