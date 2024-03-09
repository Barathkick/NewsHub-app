import React, { useEffect, useState } from 'react'
import Newsitem from './newsItem'

const Newsboard = ({category}) => {
    let apiKey = "a8bd80d3526041f7b45877b67f908ad1"
    const[articles,setarticles] = useState([])
    useEffect(()=>{
        let url =`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`
        fetch(url).then(response=> response.json()).then(data=>setarticles(data.articles))
    },[category])
  return (
    <div>
   <h2 className='text-center'>Latest <span className='badge bg-primary'>News</span></h2>
   {articles.map((news,index)=>{
    return <Newsitem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
   })}
    </div>
  )
}

export default Newsboard