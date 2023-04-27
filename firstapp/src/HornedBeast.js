import React from 'react';
import Main from './Main'
import {useState} from 'react';


function HornedBeast(props) {
    const [imageLiked, setImageLikes] = useState(false)
    const [likes, setLikes] = useState(0)
    let heart = '🖤'
    heart = imageLiked ? '❤️' : heart
    
    return (

        <div style={{ border: "3px solid purple" }}>
            <img width={200} src={props.imageUrl} alt='' />
            <h1>{props.description}</h1>
            <h3>{likes}</h3>
            <h1 onClick={function () {
                setLikes(likes+1)
                setImageLikes(true)
            }}>{heart}</h1>
        </div>)


}
export default HornedBeast;