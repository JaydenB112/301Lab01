import React, { useState } from 'react';
import HornedBeast from './HornedBeast';
import beastGallery from './data.json'
import { Button } from 'react-bootstrap';
// Importing all the goods  from where they need to be, specifically beastGallery, an array of objects so i don't have to display them one by one.
function Main(props) {
    const [imageLiked, setImageLikes] = useState(false)
    const [likes, setLikes] = useState(0)
    let heart = '🖤'
    heart = imageLiked ? '❤️' : heart
    
    function beastMap(value,index){
        console.log("Log",value)
        return <HornedBeast  beastGallery={value} setDisplaySelectedBeasts={props.setDisplaySelectedBeasts} setCurrentSelectedBeasts={props.setCurrentSelectedBeasts} setShow={props.setShow} imageUrl ={value.image_url} description ={value.description} keyword ={value.keyword}  />
    }
    return (
        <main style={{ border: "8px solid green" }}>
                   {/* <Button onClick= {function(){
                    props.setShow(true)
                   }}>Launch Modal</Button> */}
            {/* <HornedBeast imageUrl="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" title="Rhino Family" description="Parent rhino with two babies" keyword="rhino" />

            <HornedBeast imageUrl="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" title="Unicorn Head" description="Someone wearing a very silly unicorn head mask" keyword="unicorn" /> */}
        
            {beastGallery.map(beastMap)}

            {/* This where the money being made right here, this both of the images and they are being formatted somewhere else follow me */}
        </main>
        
        
    );

}
export default Main;