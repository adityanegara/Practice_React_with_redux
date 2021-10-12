import {React, useEffect} from 'react';
import Activity from './Activity';
import { connect } from 'react-redux';

import './ActivityList.css'
const ActivityList = (props) =>{
    useEffect(()=>{
      console.log(props.activity)  
    },)

    const renderActivities = (activites) =>{
        const activitesElement =  activites.map((activity)=>{
            return (
                <Activity activity={activity} />
            )
        })
        return activitesElement;
    }
    return(
        <div className='activity-list'>
            {renderActivities(props.activity)}
        </div>
    )
}

const mapStateToProps = (state) =>{
    console.log(state);
    return {activity : state.activity};
}

export default connect(mapStateToProps, {})(ActivityList)
// export default ActivityList;
