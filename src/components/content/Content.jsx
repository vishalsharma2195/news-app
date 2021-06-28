import React, {useState, useEffect} from 'react'
import './content.scss'

function Content() {
    const [newsData, setNewsData] = useState([]);

        useEffect(() => {
            fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=Enter Your Key')
            .then(response => response.json())
            .then(data => {
            // console.log(data.articles);
                setNewsData(data.articles)})   
            .catch(err => {
	            console.error(err);
                });
        },[])
    console.log(newsData);
    
    
    return (
        <div className='content' id='content'>
            <h1 id='head'>Headlines</h1>
            <ul>
                <li className='active'>Top Headlines</li>
                {/* <li>business</li>
                <li>entertainment</li>
                <li>general</li>
                <li>health</li>
                <li>science</li>
                <li>sports</li>
                <li>technology</li> */}
            </ul>    

            {(newsData.length > 0) ? newsData.map((item, id) => (
               <div className="container" key={id}>
                <div className="left">
                   <div className="head-left">
                        <a href={item.url} target='_blank {id}'><h3>{item.title}</h3></a>
                        <span>{item.author}</span>
                        <li>{item.description}</li>
                    </div>    
                </div>
                <div className="right">
                    <img src={item.urlToImage} alt="" />
                </div>
           </div>
           )) : <h1>Error</h1>}
        </div>
    )
}

export default Content
