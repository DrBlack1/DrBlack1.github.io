import React from 'react';
import './newsItem.css';
import img from './imgPlaceholder.jpg'

const NewsItem = (props) => {
        return (
            <div className='newsItem'>
            <img className= 'img' src={props.news.img}/>
            <div className= 'NewsItemText'>
            <div className='headline'>{props.news.headline}</div>
            <div className='category'>{props.news.subcat}</div>
            </div>
            </div>
        );
    };

export default NewsItem;