import React, { useState } from 'react';
import HornedBeast from './HornedBeast';
import beastGallery from './data.json'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
// Importing all the goods  from where they need to be, specifically beastGallery, an array of objects so i don't have to display them one by one.
function Main(props) {
    const [imageLiked, setImageLikes] = useState(false)
    const [likes, setLikes] = useState(0)
    let heart = '🖤'
    heart = imageLiked ? '❤️' : heart

    let filteredBeastGallery = beastGallery.filter((beast) => beast.horns === 1);

    function beastMap(value,index){
        console.log("Log",value)
        return <HornedBeast filterFunction={props.filterFunction} beast={value} setDisplaySelectedBeasts={props.setDisplaySelectedBeasts} setCurrentSelectedBeasts={props.setCurrentSelectedBeasts} setShow={props.setShow} imageUrl ={value.image_url} description ={value.description} keyword ={value.keyword}  />
    }
    return (
        <main style={{ border: "8px solid green" }}>

                  <Form.Select onChange={function(event){
        props.filterFunction(event.target.value)
      }}aria-label="Default select example">

        <option>Open this select menu</option>
        <option value="One">One</option>
        <option value="Two">Two</option>
        <option value="Three">Three</option>
      </Form.Select>
            {beastGallery.map(beastMap)}
            {/* This where the money being made right here, this both of the images and they are being formatted somewhere else follow me */}
        </main>
        
        
    );

}
export default Main;