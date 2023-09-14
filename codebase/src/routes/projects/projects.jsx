import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/Footer/footer";
import Content from "../../components/Content/Content";


const Projects = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
      <Navbar />
      <Content>
       
      <h1 className="text-4xl text-white text-center font-bold py-12">Volunteering</h1>
      <div className="text-justify">
        <p className="text-justify text-3xl text-white my-2">1. Adote um Juninho </p>
        <p>This project is dedicated to fostering the professional development and educational journey of aspiring IT professionals, empowering them to embark on a path of knowledge and growth guided by best practices. </p>
      </div>
        

      
      </Content>
      <Footer />
    </div>
  );
};

export default Projects;
