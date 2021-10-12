import {combineReducers} from 'redux';

const activityReducers = () =>{
    return [
        {
            name : 'Work',
            backgroundImage : './images/icon-work.svg',
            backgroundColor : '#FF8B64',
            id : 1,
            time : {
                day : 7,
                lastDay : 8,
                week : 32,
                lastWeek : 30,
                month : 128,
                lastMonth : 110,
            }
        },
        {
            name: 'Play',
            backgroundImage : './images/icon-play.svg',
            backgroundColor : '#56C2E6',
            id : 2,
            time : {
                day : 2,
                lastDay : 1,
                week : 10,
                lastWeek : 11,
                month : 40,
                lastMonth : 38
            }
        },
        {
            name : 'Study',
            backgroundImage : './images/icon-study.svg',
            backgroundColor : '#FF5E7D',
            id : 3,
            time : {
                day : 1,
                lastDay : 1,
                week : 7,
                lastWeek : 6,
                month : 28,
                lastMonth : 24
            }
        },
        {
            name : 'Excercise',
            backgroundImage : './images/icon-exercise.svg',
            backgroundColor :  '#4BCF83',
            id : 4,
            time : {
                day : 2,
                lastDay : 1,
                week : 10,
                lastWeek : 9,
                month : 40,
                lastMonth : 36,
            }
        },
        {
            name: 'Social',
            backgroundImage:'./images/icon-social.svg',
            backgroundColor : '#7235D1',
            id: 5,
            time: {
                day: 1,
                lastDay: 1,
                week: 5,
                lastWeek: 7,
                month: 20,
                lastMonth: 28
            }
        },
        {
            name: 'Self Care',
            backgroundImage:'./images/icon-self-care.svg',
            backgroundColor : '#F1C75B',
            id:6,
            time: {
                day: 1,
                lastDay: 1,
                week: 6,
                lastWeek:7,
                month:24,
                lastMonth:23
            }
        }
    ];
};

const selectedTimeReducer = (action = null) =>{
    return 'MONTH_SELECTED'
}

export default combineReducers({
    activity: activityReducers,
    selectedTime : selectedTimeReducer
});
