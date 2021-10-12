const selectDay = () =>{
    return {
        type : 'DAY_SELECTED',
    }
}

const selectWeek = () =>{
    return {
        type : 'WEEK_SELECTED',
    }
}

const selectMonth = () =>{
    return {
        type : 'MONTH_SELECTED',
    }
}

export {selectDay, selectMonth, selectWeek};