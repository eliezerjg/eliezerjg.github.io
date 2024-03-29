import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 

import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/Footer/footer';
import Content from '../../components/Content/Content';
import { Link } from 'react-router-dom';

const tryToRecoveryRoute = () => {
  const location = useLocation(); 
  const navigate = useNavigate();
  let recoverRoute = new URLSearchParams(location.search).get('ref');
  if(recoverRoute != null){
    let route = recoverRoute.match(/[^/]*$/)[0];
    useEffect(() => {
        navigate(`/${route}`);
      
    }, [navigate, route]);
  }
};
const Home = () => {
  
  tryToRecoveryRoute();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">

      <Navbar />

      <Content>
        <div className="text-center">
          <h1 className="text-4xl font-bold py-2 text-white">Welcome!</h1>

          <div className="rounded-full overflow-hidden w-60 h-60 mx-auto mt-12 mb-12">
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

          <p className="text-lg p-6">

            
            <Link to="https://github.com/eliezerjg/eliezerjg.github.io/tree/main/codebase" className="btn btn-primary">
              
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="#ffffff"/>
</svg>

           Full Source
              
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
</svg>
            </Link>

            
          </p>

          
        </div>

        
        
      </Content>

      <Footer />
    </div>
  );
};

export default Home;
