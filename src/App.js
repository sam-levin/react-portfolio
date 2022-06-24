import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './components/Projects'
import Footer from './components/Footer'
import Header from './components/Header'
import Navigation from './components/Navigation'
import About from './components/About'
import Contact from './components/Contact'
import Resume from './components/Resume'
const categories = [
  {
    name: 'About', 
    Component: About
  },
  { name: 'Contact',
    Component: Contact  
  },
  { name: 'Projects',
    Component: Projects
  },
  { name: 'Resume',
    Component: Resume
  }
];

function App() {
  

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const {Component} = currentCategory
  //const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <div className='flex-row align-center'>
      <Header></Header>
      <Navigation
          categories={categories}
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        ></Navigation>
      </div>
      <main>
        <Component></Component>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
