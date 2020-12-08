import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import './Creation.css';

export default function Creation(props) {
  return (
    <li className='Creation'>
    <Link to={`/creations/${props.id}`}>
      <div className='Creation-Name-User'>
        <h3 className='Creation Name'>
            {props.name}
        </h3>
        <h4>Created by {props.user}</h4>
        <img src={props.image}></img>
        <Rating
                readonly="true"
                initialRating={props.rating}
                emptySymbol={<img src="./emptysymbol.jpg" className="icon" />}
                fullSymbol={<img src="./opensymbol.jpg" className="icon" />}>
                </Rating>
      </div>
    </Link>
    </li>
    )
}