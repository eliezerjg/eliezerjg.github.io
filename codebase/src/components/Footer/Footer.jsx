import React from 'react';
import Swal from 'sweetalert2';

const downloadPdf = () => {
  Swal.fire(
    'Its nice to have you here!',
    'Click bellow to download my Resume.',
    'success'
  ).then(() => {

    
  window.open('/cv.pdf', '_blank'); 

  });
};

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 footer flex items-center justify-between">
      <p>
        Eliezer Garcia | Fullstack Development Since 2019 
        
      </p>
     
      <div className="ml-2">
      

      <button className='btn btn-primary' onClick={downloadPdf}>
    

    Download My Resume

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
</svg>

  
  </button>
      </div>
      
    </footer>
  );
};

export default Footer;
