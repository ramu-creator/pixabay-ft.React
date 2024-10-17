import React from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {useLocation} from "react-router-dom";
const AboutImage = () => {
    const location = useLocation();
    console.log(location);
    const image = location.state.val;
    console.log(image);
    
  return (
    <>
      <NavBar />
      <div id='ab-design'>
        <div id='ab-img-container'>
            <img id='ab-image' src={image.webformatURL} alt="about-image" />
            <div id='ab-img-content'>
               <p><i className="fa-solid fa-eye"></i>&nbsp;{image.views}</p>
               <p><i className="fa-regular fa-thumbs-up"></i>&nbsp;{image.likes}</p>
               <p><i className="fa-regular fa-comment"></i>&nbsp;{image.comments}</p>
               <p><i className="fa-solid fa-hashtag"></i>&nbsp;{image.tags}</p>
            </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default AboutImage
