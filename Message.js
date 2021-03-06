import React from 'react';


function Message() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay;
    
    if (hours <12) 
    {
        timeOfDay="Morning"
    } else 
    if (hours >= 12 && hours < 17)
    {
        timeOfDay="Afternoon"
    } else 
    {
        timeOfDay="Night"
    }

    const Style = {
        color: "#8FBC8F",
        backgroundColor: "#000000",
        fontSize: 60,
        fontFamily: "Roboto Condensed, san s-serif",
        margin: 0,
    }
        return (<h1 style={Style}>Good {timeOfDay}!</h1>)
}

export default Message;
