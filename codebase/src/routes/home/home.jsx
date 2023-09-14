import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/Footer/footer';
import Content from '../../components/Content/Content';
import { Link } from 'react-router-dom'; 

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      <Navbar />

      <Content>
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">Welcome!</h1>

          <div className="rounded-full overflow-hidden w-60 h-60 mx-auto mt-8 mb-4">
            <img
              src="perfil.jpg"
              alt="Profile photo"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-lg">
            Its nice to have you here, this is my portfolio. <strong>Built with React + Vite, TailwindCSS and daisyUI.</strong>
          </p>

          <p className="text-lg">
            A little bit about me:&nbsp;&nbsp;
            <Link to="/about" className="text-white text-xl font-semibold">About</Link> | 
            <Link to="/skills" className="text-white text-xl font-semibold"> My Skills</Link>
          </p>

          <p className="text-lg p-4">
            <Link to="https://github.com/eliezerjg/eliezerjg.github.io/tree/main/codebase" className="btn btn-primary">Feel free to use this source code .</Link>
          </p>

          
        </div>

        
        
      </Content>

      <Footer />
    </div>
  );
};

export default Home;
