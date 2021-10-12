import React from "react";
import './Profile.css';

const Profile = ({img, name, timeSelected, onDaySelected, onWeekSelected, onMonthSelected}) =>{
    const renderActive = (button) =>{
        if(button === timeSelected){
            return 'button-active';
        }else{
            return '';
        }
    }; 
    return (
        <div className='profile'>
            <div className='profile-section'>
                <div className='profile-image'>
                    <img src={img}></img>
                </div>
                <div className='profile-name'>
                    <p>Report for</p>
                    <p>{name}</p>
                </div>
            </div>
        
            <div className='profile-selector'>
                <button className={renderActive('DAY_SELECTED')} onClick={()=>{onDaySelected()}}>Daily</button>
                <button className={renderActive('WEEK_SELECTED')}  onClick={()=>{onWeekSelected()}}>Weekly</button>
                <button className={renderActive('MONTH_SELECTED')} onClick={()=>{onMonthSelected()}}>Monthly</button>
            </div>
        </div>
    )
}

export default Profile;