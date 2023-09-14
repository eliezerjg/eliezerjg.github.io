import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/Footer/footer';
import Content from '../../components/Content/Content';
import { Link } from 'react-router-dom';
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
    descripsetion: 'After i finished my technician course i started as a Jr Backend Developer in Merito Engenharia de Software.',
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

const Skills = () => {
  return (
    <div>
      <Navbar />
      <Content>

      <div>
      <p className='text-4xl text-white font-bold mb-12 py-7 '>Timeline of my career:</p>

<ul className="steps relative py-6">
  <li className="step step-primary"><a onClick={() => carrerInfos("informaticstechnician")}>Informatics Technician Student</a></li>
  <li className="step step-primary"><a onClick={() => carrerInfos("techsupport")}>Tech Support</a></li>
  <li className="step step-primary"><a onClick={() => carrerInfos("technologiststudent")}>Tecnologist in Web Development Student</a></li>
  <li className="step step-primary"><a onClick={() => carrerInfos("jrbackend")}>Jr. Backend & Desktop Developer</a></li>
  <li className="step step-primary"><a onClick={() => carrerInfos("midbackend")}>Mid. Backend & Desktop Developer</a></li>
  <li className="step step-primary"><a onClick={() => carrerInfos("fullstackangular")}>Fullstack Angular + Spring Java  Developer</a></li>
  <li className="step"><a onClick={() => carrerInfos("newchallenge")}>Looking for a new challenge</a></li>
</ul>

      </div>


      <div className='text-justify mb-4 py-12'>




  <h1 className='text-4xl text-white font-bold mb-4'>Real life Projects</h1>

  <p>Focused on Fullstack Engineering, most of my career revolved around backend development, where I built strong applications
      using Java 8+ and Java / Jakarta EE, Spring Framework, PHP and Javascript. During the Covid-19 pandemic, the technology sector
      underwent a shift towards requiring more fullstack engineers to address the global pandemic's challenges. Consequently, I made a slight career pivot
      to address this demand, with  React and Classic technologies as Javascript, JQuery, Angular JS & Angular, Flutter with Dart and more. Cases of Sucess:
    </p>

  <ul className="list-disc p-4">
  <li>Flexcorp - Custom Point Of Sale System for pharmacies. <Link to="https://merito-es.com.br/" className='text-blue-700'>read more...</Link></li>
  <li>Flex - Generic Point Of Sale System. <Link to="https://merito-es.com.br/" className='text-blue-700'>read more...</Link></li>
  <li>Aitra Solutions - Temporary DBA Tech Freelancer. <Link to="https://www.aitra.com.br/" className='text-blue-700'>read more...</Link></li>
  
  <li>SMaga 360 Web - Logistics Systems for Tracking Ships around the world. <Link to="https://smaga360.smagalhaes.com.br/" className='text-blue-700'>read more...</Link></li>
  <li>SMaga 360 Flutter App - Logistics Systems for Tracking Ships around the world. <Link to="https://play.google.com/store/apps/details?id=br.com.smagalhaes.cockpitapp&hl=pt_BR&pli=1" className='text-blue-700'>read more...</Link></li>
  

   

  </ul>
</div>

        <div className='text-justify mb-4 py-4'>
          <h1 className='text-4xl text-white font-bold mb-4'>Soft Skills</h1>
            <ul className="list-disc ml-6">
              <li><strong>Resilience:</strong> Ability to overcome challenges and adversities while maintaining a positive focus.</li>
              <li><strong>Commitment:</strong> Total dedication to work and company goals.</li>
              <li><strong>Commitment to Growth:</strong> Continuous pursuit of learning and personal improvement.</li>
              <li><strong>Quality:</strong> Dedication to delivering high-quality work.</li>
              <li><strong>Independence:</strong> Capable of performing tasks independently.</li>
            </ul>
        </div>
        <div className='text-justify'>
          <h1 className='text-4xl text-white font-bold mb-4'>Hard Skills</h1>
          <ul className="list-disc ml-6">
            <li><strong>Programming Languages:</strong> Java / Javascript.</li>
            <li><strong>Frameworks / Libraries:</strong> Spring Framework, Angular / AngularJS, React + Vite.</li>
            <li><strong>Databases:</strong> PostgreSQL, MySQL and SQL Server.</li>
            <li><strong>SQL Programming Languages:</strong> PGPLSQL and T-SQL.</li>
            <li><strong>Tooling:</strong> Postman / Fiddler, Vscode, Intellij, Git, Android Studio, Taiga and etc.</li>
            <li><strong>Agile development:</strong> XP, Scrum and Kanban.</li>
           
          </ul>
         </div>
       

        

        <div className='text-justify py-5'>
          
          
          <a href="https://github.com/eliezerjg" target="_blank" rel="noopener noreferrer" className="btn bg-indigo-600 hover:bg-indigo-700 text-white">
            Read more on github

        
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>

            
          </a>
        </div>

       
        
        

          
        
      </Content>
      <Footer />
    </div>
  );
};

export default Skills;
