import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer'
import Main from './Main';
import beastGallery from './data.json'
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';   
function App() {
  const [show, setShow] = useState(true)
  const [displaySelectedBeasts, setDisplaySelectedBeasts] = useState(false)
  const [currentSelectedBeasts, setCurrentSelectedBeasts] = useState(undefined)
  return (
    <div className="App">
      <Modal show={show} onHide={function () {
        setShow(false)
      }}>
        <h1></h1>
        <img src={displaySelectedBeasts} alt=''></img>
        <h3>{currentSelectedBeasts}</h3>
      </Modal> 
      {/* <Button onClick={function(){
        setShow(true)
      }
      }>
      Launch</Button> */}
      <Header />
      <Main setShow={setShow} setCurrentSelectedBeasts={setCurrentSelectedBeasts} setDisplaySelectedBeasts={setDisplaySelectedBeasts}/>
      <Footer />
    </div>
  );
}

export default App;
