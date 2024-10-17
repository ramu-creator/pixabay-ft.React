import { useEffect, useState } from "react";
import NavBar from "./NavBar"
import Footer from "./Footer";
import {useNavigate} from "react-router-dom"
import "../styles/App.css"
function SearchImages(){
    const [search,setsearch]=useState('');
    const [api,setapi]= useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        let get = fetch(`https://pixabay.com/api/?key=14551805-1307b407e13e1f080701fe6a9&q=${search}&image_type=photo`);
        get.then(res=>res.json()).then(data=>{
            setapi(data.hits)
            console.log(data);
          
        }).catch(error=>console.error(error));
    },[search]);
    const Data = api.filter(res=>{
        return res.tags.toLowerCase().includes(search.toLowerCase());
    })

    return(
        <>
            <NavBar/>
            <div id="container">
                <input id="search"
                    type="text"
                    value={search}
                    onChange={(event) => setsearch(event.target.value)}
                    placeholder="Search images"

                />       
                <div id="pix-container" >
                    {Data.map(val=>{
                        return(
                            <div id="pix-s" key={val.id}>
                                <img id="pix-s1" src={val.webformatURL} alt="#"
                                  onClick={()=>navigate("/about",{state:{val}})} 
                                />
                                <div id="pix-s2">
                                    <i className="fa-regular fa-heart"></i>
                                    <i className="fa-regular fa-bookmark"></i>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
            <Footer/>
        </>
    )
}
export default SearchImages;
