import React from 'react';

export function Article ({article}) {
  const {title, description, author, publishedAt} = article;

  return (
    <div className='article'>
      <p className='title'>{title}</p>
      <p className='description'>{description}</p>
      <p className='author'>Posted by <span>{author}</span> <span>{publishedAt}</span></p>
    </div>
  ); 
}