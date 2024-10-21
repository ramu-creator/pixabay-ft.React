import React,{useEffect,useState} from 'react'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import {useLocation} from "react-router-dom";
const AboutImage = () => {
    const [api,setapi]= useState([]);
    const location = useLocation();
    console.log(location);
    const image = location.state.val;
    console.log(image);
    useEffect(()=>{
      let get = fetch(`https://pixabay.com/api/?key=14551805-1307b407e13e1f080701fe6a9&q=${image.tags}&image_type=photo`);
      get.then(res=>res.json()).then(data=>{
          setapi(data.hits)
          console.log(data);
        
      }).catch(error=>console.error(error));
  },[image.tags]);
    
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
      <h2 id='similar-images'>Similar Images</h2>
      <div id='pix-container'>
        {api.map((img,index)=>(
            <div id='pix-s' key={index}>
              <img id='pix-s1' src={img.webformatURL} alt="similar-image" />
              <div id="pix-s2">
                  <i className="fa-regular fa-heart"></i>
                  <i className="fa-regular fa-bookmark"></i>
                </div>
            </div>
            
          ))}
      </div>
      <Footer/>
    </>
  )
}

export default AboutImage
