import React from 'react';
import Content from '../../components/Content/Content';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/Footer/footer';

const Contact = () => {
  return (
    <div className='flex flex-col items-center min-h-screen'>
      <Navbar />
      <Content>

      <h1 className='text-4xl text-white text-center font-bold'>Contact-me</h1>

        <div className='text-justify'>
          
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <strong>Linkedin:</strong>
              <Link
                to="https://www.linkedin.com/in/eliezer-jr-garcia/"
                className="text-white"
              >
                @eliezer-js-garcia.
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <strong>Github:</strong>
              <Link
                to="https://github.com/eliezerjg"
                className="text-white"
              >
                @eliezerjg.
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <strong>Telephone:</strong>
              <Link
                to="tel:+351926525637"
                className="text-white"
              >
                +(351) 926 525 637.
              </Link>
            </div>
          </div>
        </div>
      </Content>
      <Footer />
    </div>
  );
};

export default Contact;
