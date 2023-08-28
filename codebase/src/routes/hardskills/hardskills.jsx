import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/Footer/footer'
import Content from '../../components/Content/Content'

const hardskills = () => {
  return (
    <div>
      <Navbar/>
        <Content>
          <h1 className='text-4xl font-bold mb-4'>Hard Skills</h1>
          <p><strong>Programming Languages:</strong> Java / Javascript </p>
          <p><strong>Frameworks / Libraries:</strong> Spring Framework, Angular / AngularJS, React + Vite</p>
          <p><strong>Databases:</strong> PostgreSQL, MySQL and SQL Server;</p>
          <p><strong>Tooling:</strong> Postman / Fiddler, Vscode, Intellij, Git, Android Studio and etc.</p>
        </Content>
      <Footer/>
    </div>
  )
}

export default hardskills