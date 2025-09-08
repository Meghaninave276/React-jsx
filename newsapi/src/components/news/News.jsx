import React, { useEffect, useState } from 'react';
import "./News.css";

export default function News() {


    const [arts, setArts] = useState([]);

    const fetchNews = () => {
        fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=002efedd43a6481caededec969eda1b6").then(res => res.json()).then(data => setArts(data.articles));
    }

    useEffect(() => { fetchNews() }, [])

    return (
        <div className="album py-5 bg-body-tertiary">
            <div className='container text-center'>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
                    {
                        arts.map((a,index)=>(
                            <div className="col" key={index}>
                                <div className="card" >
<img src={a.urlToImage||'https://techcrunch.com/wp-content/uploads/2023/05/disrupt-expo-hall-crop.jpeg'} alt="" />
  <div className="card-body">
    <h5 className="card-title">{a.title}</h5>
    <p className="card-text">{a.description}</p>
    <a href={a.url} className="btn btn-primary">Learn More</a>
  </div>
</div>
                                
                            </div>
                        ))
                    }
                  
                </div>
            </div>
        </div>
    )
}


// GG9Cb+jV4@wfDyY

// api key = 002efedd43a6481caededec969eda1b6