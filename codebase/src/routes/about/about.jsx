import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/Footer/footer';
import Content from '../../components/Content/Content';
import Swal from 'sweetalert2';


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

          
        </div>
      </Content>

 
      <Footer />
    </div>
  );
};

export default about;
