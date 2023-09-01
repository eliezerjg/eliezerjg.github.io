import React from 'react';
import Footer from '../../components/Footer/Footer';
import Content from '../../components/Content/Content';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Content>

      <h1 className='text-4xl text-center font-bold mb-4 py-5'>Contact-me</h1>

        <div className='text-justify mb-4 py-4'>
          
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
