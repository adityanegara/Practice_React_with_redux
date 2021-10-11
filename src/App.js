import React from 'react';
import Profile from './components/profile/Profile';
import ActivityList from './components/activity_list/ActivityList';

const App = () =>{
    return (
        <div className='dashboard'>
            <Profile name='Aditya Negara' img='./images/profile-adit.png'/> 
            <ActivityList/>
        </div>
    )
}

export default App;