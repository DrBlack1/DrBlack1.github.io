import React from 'react';
import './container.css';
import Header from '../header/header';
import NewsItem from '../newsItem/newsItem';

const Container = (props) => {
    const newsItem = props.news.map((newsInfo) => <NewsItem news={newsInfo} /> );

        return (
            <div className='container'>
                <Header header = {props.header}/>
                <div className='newsitemdiv'>
                {newsItem}
                </div>
            </div>
        );
    };

export default Container;