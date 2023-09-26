import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/Footer/footer";
import Content from "../../components/Content/Content";
import { Link } from "react-router-dom";


const Skills = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Navbar />
      <Content>
       
      <h1 className="text-4xl text-white text-center font-bold py-12">
            Skills and Projects
      </h1>

      <h1 className="text-justify text-3xl text-white my-2">
            Real life Projects
      </h1>

        <div className="text-justify">
          

          <p>
            Focused on Fullstack Engineering, most of my career revolved around
            backend development, where I built strong applications using Java 8+
            and Java / Jakarta EE, Spring Framework, PHP and Javascript. During
            the Covid-19 pandemic, the technology sector underwent a shift
            towards requiring more fullstack engineers to address the global
            pandemic's challenges. Consequently, I made a slight career pivot to
            address this demand, with React and Classic technologies as
            Javascript, JQuery, Angular JS & Angular, Flutter with Dart and
            more. Cases of Sucess:
          </p>

          <ul className="list-disc ml-6">
            <li>
              Flexcorp - Custom Point Of Sale System for pharmacies.{" "}
              <Link to="https://merito-es.com.br/" className="text-blue-700">
                read more...
              </Link>
            </li>
            <li>
              Flex - Generic Point Of Sale System.{" "}
              <Link to="https://merito-es.com.br/" className="text-blue-700">
                read more...
              </Link>
            </li>
            <li>
              Aitra Solutions - Host Solutions.{" "}
              <Link to="https://www.aitra.com.br/" className="text-blue-700">
                read more...
              </Link>
            </li>

            <li>
              SMaga 360 Web - Logistics Systems for Tracking Ships around the
              world.{" "}
              <Link
                to="https://smaga360.smagalhaes.com.br/"
                className="text-blue-700"
              >
                read more...
              </Link>
            </li>
            <li>
              SMaga 360 Flutter App - Logistics Systems for Tracking Ships
              around the world.{" "}
              <Link
                to="https://play.google.com/store/apps/details?id=br.com.smagalhaes.cockpitapp&hl=pt_BR&pli=1"
                className="text-blue-700"
              >
                read more...
              </Link>
            </li>
          </ul>

          
        </div>

        <div className="text-justify">
          <h1 className="text-3xl text-white py-2 mt-4">Soft Skills</h1>
          <ul className="list-disc ml-6">
            <li>
              <strong>Resilience:</strong> Ability to overcome challenges and
              adversities while maintaining a positive focus.
            </li>
            <li>
              <strong>Commitment:</strong> Total dedication to work and company
              goals.
            </li>
            <li>
              <strong>Commitment to Growth:</strong> Continuous pursuit of
              learning and personal improvement.
            </li>
            <li>
              <strong>Quality:</strong> Dedication to delivering high-quality
              work.
            </li>
            <li>
              <strong>Independence:</strong> Capable of performing tasks
              independently.
            </li>
          </ul>
        </div>
        <div className="text-justify">
          <h1 className="text-3xl text-white py-2 mt-4">Hard Skills</h1>
          <ul className="list-disc ml-6">
            <li>
              <strong>Programming Languages:</strong> Java / Javascript.
            </li>
            <li>
              <strong>Frameworks / Libraries:</strong> Spring Framework, Angular
              / AngularJS, React + Vite.
            </li>
            <li>
              <strong>Databases:</strong> PostgreSQL, MySQL and SQL Server.
            </li>
            <li>
              <strong>SQL Programming Languages:</strong> PGPLSQL and T-SQL.
            </li>
            <li>
              <strong>Tooling:</strong> Postman / Fiddler, Vscode, Intellij,
              Git, Android Studio, Taiga and etc.
            </li>
            <li>
              <strong>Agile development:</strong> XP, Scrum and Kanban.
            </li>
          </ul>
        </div>

      
      </Content>
      <Footer />
    </div>
  );
};

export default Skills;
