import React from "react";
import './Profile.css';

const Profile = ({img, name}) =>{
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
                <button>Daily</button>
                <button>Weekly</button>
                <button>Monthly</button>
            </div>
        </div>
    )
}

export default Profile;