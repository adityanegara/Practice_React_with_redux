import React from "react";
import './Activity.css';

const Activity = ({name, backgroundImage, backgroundColor}) =>{
    return (
        <div className='activity' style={{backgroundColor:`${backgroundColor}`}}>
            <div style={{backgroundColor:`${backgroundColor}`, height:'20%',   backgroundImage: `url(${backgroundImage})` }} className='activity-background'>
            </div>
     
                <div className='activity-info'>
                    <div className='activity-name'>
                        <p>{name}</p>
                        <div className='activity-satay'>
                            <img src='./images/icon-ellipsis.svg'></img>
                        </div>
                    </div>
                    <div className='activity-time'>
                        <p>32hrs</p>
                        <p>Last Week -36hrs</p>
                    </div>
            </div>
        </div>
    )
}

export default Activity;