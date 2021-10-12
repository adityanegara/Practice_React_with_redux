import React from "react";
import './Activity.css';

const Activity = ({activity}) =>{
    return (
        <div className='activity' style={{backgroundColor:`${activity.backgroundColor}`}}>
            <div style={{backgroundColor:`${activity.backgroundColor}`,    backgroundImage: `url(${activity.backgroundImage})` }} className='activity-background'>
            </div>
     
                <div className='activity-info'>
                    <div className='activity-name'>
                        <p>{activity.name}</p>
                        <div className='activity-satay'>
                            <img src='./images/icon-ellipsis.svg'></img>
                        </div>
                    </div>
                    <div className='activity-time'>
                        <p>{activity.time.week}hrs</p>
                        <p>Last Week - {activity.time.lastWeek}hrs</p>
                    </div>
            </div>
        </div>
    )
}

export default Activity;