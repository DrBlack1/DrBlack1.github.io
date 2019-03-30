import React from 'react';

const ItemSize = (props) => {
    return (
        <div className={props.containerClass}>
            <img src={props.src} className={props.imgClass} alt={props.alt}/>
            <span>{props.size}</span>
        </div>
    )
}   

export default ItemSize;