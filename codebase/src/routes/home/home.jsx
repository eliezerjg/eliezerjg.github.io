import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/Footer/footer';
import Content from '../../components/Content/Content';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      <Navbar />

      <Content>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome!</h1>

          <div className="rounded-full overflow-hidden w-40 h-40 mx-auto mt-8">
            <img
              src="perfil.jpg"
              alt="Profile photo"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-lg">
            Its nice to have you here, this is my portfolio. <strong>Built with React + Vite, TailwindCSS and daisyUI.</strong>
          </p>
        </div>

        
        
      </Content>

      <Footer />
    </div>
  );
};

export default Home;
