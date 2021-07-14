import Image from 'next/image'
import React, { useState } from 'react'
import profilePic from '../pictures/Image 17@1X.png'
import icon from '../pictures/searchicon.png'
import Search from './search'


const searchAPI="https://api.themoviedb.org/3/search/multi?api_key=c1295bf81a59808ce3e4bc6dcd1dbf3f&language=en-US&query="



const MainLayout= ()=>{
    // const [searchTerm, setSearchTerm] = useState("");
    // const [Result, setResult] = useState([]);

    // const handleOnInput= (e)=>{
    //     e.preventDefault()
    //     setSearchTerm(e.target.value)
    //     console.log(searchTerm);
    //     fetch(searchAPI+searchTerm)
    //     .then((res)=> res.json())
    //     .then((data)=>{
    //         setResult(data.results)
    //     })
    // }

    // const handleOnChange= (e)=>{
    //     setSearchTerm(e.target.value)

    // }

    return (
        
            <header>

                <div className="container">
                    <div className="logo">
                        <Image src={profilePic} alt="" />
                    </div>
                    <div className="input">

                        <input type="text"   placeholder="Find Movie..." />
                        <div className="res-container">
                            {/* {Result.map(movie =>(
                                <Search key={movie.id} {...movie} />
                                ))}
                         */}
                        </div>
                        <div className="icon">
                            <Image src={icon} alt="" />
                        </div>
                    </div>
                    
                </div>
            </header>
        
    )
}

export default MainLayout;