import React from "react";

function Card(props){
    return(
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="mypic" className="card_img" />
                    <div className="card_info">
                        <h2 className="card_tittle"> {props.sname} </h2>
                        <a href={props.href}  target="blank" >
                            <button> Watch now </button>
                        </a>
                        <span className="card_category"> {props.tittle} </span>
                    </div>
                </div>
            </div>
        </>
  
    )
  };

  export default Card;