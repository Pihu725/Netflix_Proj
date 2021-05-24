import React from 'react';
import ReactDom from 'react-dom';

function Card(props) {
  return (
    <>
      { <div className="">
        <div className="card_box">
          <img src={props.imgsrc} alt="myPic" className="card__img" />
          <div className="card__info">
            <span className="card__catagory">{props.title}</span>
            <h3 className="card__title">{props.sname}</h3>
            <a href={props.link} target="_blank">
              <button > Watch Now</button>
            </a>
          </div>
        </div>
        
      </div>
      
      }
   
    </>
  );
  }
  export default Card;