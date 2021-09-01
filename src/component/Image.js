import React from 'react';
import ImageSrc from "./image/unsplash.jpg";
import ImageSrc1 from "./image/unsplash1.jpg";
import "./Image.css";

const Image = () =>  {
    const Image1 =ImageSrc;
    const Image2 =ImageSrc1;

        return (
            <div className="container d-flex mt-5 pl-2 border-1">
                <div className="logo">
                    <img src={Image1} 
                    alt="user_photo" 
                    width="500"
                    height="400"/>
                </div>
                <div className="container ml-5">
                    <img src={Image2} 
                    alt="user_photo" 
                    width="500"
                    heigth="400"/>
                </div>

            </div>
        );
    }
export default Image;