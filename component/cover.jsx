import Image from 'next/image'
import { useState, useEffect } from 'react'
import test from '../pictures/test.jpeg'
const popularAPI="https://api.themoviedb.org/3/movie/popular?api_key=c1295bf81a59808ce3e4bc6dcd1dbf3f&language=en-US&page=1"
const imageAPI="http://image.tmdb.org/t/p/original"
let j =0;

//{backdrop_path, title, release_date}
const Cover= ()=>{
    const [covers, setCovers] = useState([]);
    useEffect(()=>{
        fetch(popularAPI)
        .then((res)=> res.json())
        .then((data)=>{
          const result=setCovers(data.results)
        })
    },[]);
    let i=0;
    let coverid=[];
    let titleid=[];
    let release_dateid =[];
    let popularityid=[];
    covers.map(cover=>{
        coverid[i]= cover.backdrop_path;
        titleid[i]= cover.title;
        release_dateid[i]= cover.release_date;
        popularityid[i]=cover.popularity
        i+=1;
    })
    let link= imageAPI+coverid[0];

    const [links, setLinks] = useState(imageAPI+coverid[0]);
    const change=()=>{
        j+=1;
        if (j==20) {
            j=0
        }
        const newcoverid= coverid[j];
        setLinks(imageAPI+newcoverid)
    }

    const change2=()=>{
        j-=1;
        if (j==-1) {
            j=19
        }
        const newcoverid= coverid[j];
        setLinks(imageAPI+newcoverid)
    }


    return (
        <>
           <div className="cover">
                <Image layout="fill" src={links} alt=""/>
                <div className="container">
                    <div className="text">
                        <h1 className="title">{titleid[j]}</h1>
                        <p className="date">{release_dateid[j]}</p>
                        <p className="popularity">{popularityid[j]}</p>
                    </div>
                    <div className="controls">
                        <button className="pervious" onClick={change2}>&lt;</button>
                        <p className="page">{j+1}/20</p>
                        <button className="next" onClick={change}>&gt;</button>
                    </div>
                </div>
           </div>
        </>
    )
}

export default Cover;