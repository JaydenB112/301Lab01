import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer'
import Main from './Main';
import beastGallery from './data.json'
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
function App() {
  // let choice = "Two"
  const [show, setShow] = useState(true)
  const [displaySelectedBeasts, setDisplaySelectedBeasts] = useState(false)
  const [currentSelectedBeasts, setCurrentSelectedBeasts] = useState(undefined)
  const [filter, filterFunction] = useState("")
  return (
    <div className="App">
      <Form.Select onChange={function(event){
        filterFunction(event.target.value  )
      }}aria-label="Default select example">

       
        <option>Open this select menu</option>
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
      </Form.Select>
      <header className='App-Header'>
      <h1>{filter}</h1>

      <Modal show={show} onHide={function () {
        setShow(false)
      }}>

        <img src={displaySelectedBeasts} alt=''></img>
        <h3>{currentSelectedBeasts}</h3>
      </Modal>
      {/* <Button onClick={function(){
        setShow(true)
      }
      }>
      Launch</Button> */}
      <Header />
      <Main filterFunction={filterFunction} setShow={setShow} setCurrentSelectedBeasts={setCurrentSelectedBeasts} setDisplaySelectedBeasts={setDisplaySelectedBeasts} />
      <Footer />
      </header>
    </div>

  );
}

export default App;
