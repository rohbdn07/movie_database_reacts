import React from 'react';
import './index.css';
let date= new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

let curDate= new Date();
curDate=curDate.getHours();
let greeting='';
let cssStyle={};

if (curDate>=1 && curDate<12){
    greeting='Good morning';
cssStyle.color='Green';
}else if(curDate>=12 && curDate<19){
    greeting='Good evening';
    cssStyle.color="Yellow";
}else{
    greeting='Good night';
    cssStyle.color="Black";
}
const Home =()=>{
    return(
        <>
            <div className='greeting'>
            <h2> Hey, Rohit. <span style={cssStyle}>{greeting}</span></h2>
            </div>
            <div className='dateTime'>
            <p className='show'> The current date is : {date} </p> 
            <p> The current time is : {time}</p>
            </div> 
       </>
    )
}
export default Home;