import {React, useState} from 'react';
import Profile from './components/profile/Profile';
import ActivityList from './components/activity_list/ActivityList';

const App = () =>{
    const [timeSelected, setSelectedTime] = useState('WEEK_SELECTED');
    
    const handleDaySelected = () =>{
        setSelectedTime('DAY_SELECTED');
    }
    const handleWeekSelected = () =>{
        setSelectedTime('WEEK_SELECTED');
    }
    const handleMonthSelected = () =>{
        setSelectedTime('MONTH_SELECTED');
    }

    return (
        <div className='dashboard'>
            <Profile 
                name='Aditya Negara' 
                img='./images/profile-adit.png'
                onDaySelected = {handleDaySelected}
                onWeekSelected = {handleWeekSelected}
                onMonthSelected = {handleMonthSelected}
                timeSelected= {timeSelected}
                /> 
            <ActivityList timeSelected={timeSelected}/>
        </div>
    )
}

export default App;