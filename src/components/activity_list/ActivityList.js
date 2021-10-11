import React from 'react';
import Activity from './Activity';

import './ActivityList.css'

const ActivityList = () =>{
    return(
        <div className='activity-list'>
            <Activity 
                name ='Work' 
                backgroundImage='./images/icon-work.svg' 
                backgroundColor = '#FF8B64' />
            <Activity
                name='Play'
                backgroundImage='./images/icon-play.svg'
                backgroundColor = '#56C2E6'/>
            <Activity 
                name='Study'
                backgroundImage='./images/icon-study.svg'
                backgroundColor = '#FF5E7D'/>
            <Activity 
                name='Excercise'
                backgroundImage='./images/icon-exercise.svg'
                backgroundColor = '#4BCF83'/>
            <Activity 
                 name='Social'
                 backgroundImage='./images/icon-social.svg'
                 backgroundColor = '#7235D1'/>
            <Activity 
              name='Self Care'
              backgroundImage='./images/icon-self-care.svg'
              backgroundColor = '#F1C75B'
            />
        </div>
    )
}

export default ActivityList;