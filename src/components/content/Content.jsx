import React, {useState, useEffect} from 'react'
import './content.scss'

function Content() {
    const [newsData, setNewsData] = useState([]);
    // let url = 'https://newsapi.org/v2/everything?' +
    //       'q=Apple&' +
    //       'from=2021-06-23&' +
    //       'sortBy=popularity&' +
    //       'apiKey=f8d175e8aad545c39c9428775d44a495';
    
        useEffect(() => {
            fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=f8d175e8aad545c39c9428775d44a495')
            .then(response => response.json())
            .then(data => {
            // console.log(data.articles);
            setNewsData(data.articles);
        })   
    },[])
    console.log(newsData);
    
    return (
        <div className='content' id='content'>
           <h2 id='top'>Top Headlines</h2>

           {newsData.map((item, key) => (
               <div className="container">
               <div className="left">
                   <div className="head-left">
                        <a href={item.url} target='_blank'><h3>{item.title}</h3></a>
                        <span>{item.author}</span>
                        <li>{item.description}</li>
                    </div>    
               </div>
               <div className="right">
                    <img src={item.urlToImage} alt="" />
               </div>
           </div>
           ))}
           
        </div>
    )
}

export default Content
