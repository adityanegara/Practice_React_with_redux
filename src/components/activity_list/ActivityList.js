import {React, useEffect} from 'react';
import Activity from './Activity';
import { connect } from 'react-redux';

import './ActivityList.css'
const ActivityList = (props) =>{
    useEffect(()=>{
        console.log(props);
    })
    const renderActivities = (activites, selectedTime) =>{
        console.log(selectedTime);
        const activitesElement =  activites.map((activity)=>{
            return (
                <Activity key={activity.id} activity={activity} selectedTime={selectedTime}/>
            )
        })
        return activitesElement;
    }
    return(
        <div className='activity-list'>
            {renderActivities(props.activity, props.timeSelected)}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        activity : state.activity};
}

export default connect(mapStateToProps, {})(ActivityList)
// export default ActivityList;
