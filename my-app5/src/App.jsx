import './App.css';
import { useContext } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import ContextProvider from './context/AppContext';

function App() {
  
  return (
    <>
      <ContextProvider>
        <Header/>
        <Contact/>
        <Footer/>
      </ContextProvider>
    </>
  );
};

export default App
