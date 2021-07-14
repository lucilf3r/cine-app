import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import MainLayout from '../component/MainLayout'
import React from 'react'
import Cover from '../component/cover'
import Movie from '../component/movie'


const popularAPI="https://api.themoviedb.org/3/movie/popular?api_key=c1295bf81a59808ce3e4bc6dcd1dbf3f&language=en-US&page=1"
const topAPI="https://api.themoviedb.org/3/movie/top_rated?api_key=c1295bf81a59808ce3e4bc6dcd1dbf3f&language=en-US&page=1"
const upcomingAPI="https://api.themoviedb.org/3/movie/upcoming?api_key=c1295bf81a59808ce3e4bc6dcd1dbf3f&language=en-US&page=1"
const imageAPI="http://image.tmdb.org/t/p/original"

export default function Home() {
  const [pop, setPop] = useState([]);
  const [top, setTop] = useState([]);
  const [up, setUp] = useState([]);

  useEffect(()=>{
    fetch(popularAPI)
    .then((res)=> res.json())
    .then((data)=>{
      setPop(data.results)
    })
  },[]);

  useEffect(()=>{
    fetch(topAPI)
    .then((res)=> res.json())
    .then((data)=>{
      setTop(data.results)
    })
  },[]);

  useEffect(()=>{
    fetch(upcomingAPI)
    .then((res)=> res.json())
    .then((data)=>{
      setUp(data.results)
    })
  },[]);

  return (
    <div className={styles.container}>
     <MainLayout/>
     <Cover/>

     <div className="cards-line">
      <h1>Top Rated</h1>
        <div className="cards">
            {top.map(movie =>(
            <Movie key={movie.id} {...movie} />
            ))}
        </div>
    </div>

    <div className="cards-line">
      <h1>Most Popular</h1>
        <div className="cards">
            {pop.map(movie =>(
            <Movie key={movie.id} {...movie} />
            ))}
        </div>
    </div>

    <div className="cards-line">
      <h1>Upcoming</h1>
        <div className="cards">
            {up.map(movie =>(
            <Movie key={movie.id} {...movie} />
            ))}
        </div>
    </div>

    </div>
  )
}
