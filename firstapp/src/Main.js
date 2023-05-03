import React, { useState } from 'react';
import HornedBeast from './HornedBeast';
import beastGallery from './data.json'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
// Importing all the goods  from where they need to be, specifically beastGallery, an array of objects so i don't have to display them one by one.
function Main(props) {
    const [imageLiked, setImageLikes] = useState(false)
    const [likes, setLikes] = useState(0)
    const [horns, setHorns] = useState(2)
    let heart = '🖤'
    heart = imageLiked ? '❤️' : heart

    let filteredBeastGallery = beastGallery.filter((beast) => beast.horns == horns);

    function beastMap(value, index) {
        console.log("Log", value)
        return <HornedBeast setHorns={value.setHorns} filterFunction={props.filterFunction} beast={value} setDisplaySelectedBeasts={props.setDisplaySelectedBeasts} setCurrentSelectedBeasts={props.setCurrentSelectedBeasts} setShow={props.setShow} imageUrl={value.image_url} description={value.description} keyword={value.keyword} />
    }
    return (
        <main style={{ border: "8px solid green" }}>

            <Form.Select onChange={function (event) {
                setHorns(event.target.value)
            }} aria-label="Default select example">

                <option>Filter by Horns</option>
                <option value='1' >One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            {filteredBeastGallery.map(beastMap)}
            {/* This where the money being made right here, this both of the images and they are being formatted somewhere else follow me */}
        </main>


    );

}
export default Main;