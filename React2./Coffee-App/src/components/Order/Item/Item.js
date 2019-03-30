import React from 'react';

const Item = (props) => {
    return (
        <div className={props.containerClass}>
            <img className={props.imgClass} src={props.src} alt={props.alt}/>
            <span>{props.name}</span>
        </div>
    )
}

export default Item;