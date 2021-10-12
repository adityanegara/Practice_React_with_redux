import {React} from "react";
import './Activity.css';

const Activity = ({activity, selectedTime}) =>{
    if(selectedTime === 'WEEK_SELECTED'){
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
    }else if(selectedTime === 'DAY_SELECTED'){
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
                        <p>{activity.time.day}hrs</p>
                        <p>Last Day - {activity.time.lastDay}hrs</p>
                    </div>
                </div>
            </div>
        )
    }else{
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
                        <p>{activity.time.month}hrs</p>
                        <p>Last Month - {activity.time.lastMonth}hrs</p>
                    </div>
                </div>
            </div>
        )
    }
   
}

export default Activity;