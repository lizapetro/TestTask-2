import React, { useState, useEffect } from 'react';

import { Article } from './Article';
import { Loading } from './Loading';


export function Main ({autorization}) {
  const [news, setNews] = useState ([]);
  async function getNews () {
    const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=00a92ca6096a4153a967133cac6479f3');
    const data = await response.json();
    setNews(data.articles);
  }
  
  useEffect(() => {
   getNews();
  }, []);

  if (news.length===0){
    return <Loading data={'news'}/>
  }

  return (
    <div className='articles'>
      {news.map((article, index) => <Article article={article} key={index}/>)}
    </div>
  );
}