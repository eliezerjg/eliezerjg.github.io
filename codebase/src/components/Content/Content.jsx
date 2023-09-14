import React from 'react';

const Content = ({ children }) => {
  return (
    <div className='container mx-auto my-12 p-4 conteudo'>
      {children}
    </div>
  );
};

export default Content;
