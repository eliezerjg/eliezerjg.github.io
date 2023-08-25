import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/Footer/footer'
import Content from '../../components/Content/Content'

const about = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />

      <Content>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">About me</h1>

          <div className="w-100vh h-40">
            <img
              src="bg-about.jpg"
              alt="nature"
              className="w-full h-full object-cover"
            />
          </div>


          <p className="text-lg">
            Beyond the Professional
            I'm a very communicative person, happy and sociable,
            love to speak and share funny stories,
            love nature, barbecues and my pets.
          </p>
        </div>

        
        
      </Content>

      {/* Rodapé */}
      <Footer />
    </div>
  );
};

export default about