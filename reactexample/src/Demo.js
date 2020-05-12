import React, {Component} from 'react';
import ReactDOM from 'react-dom';
 

const name= 'Rohit';
let date= new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();
const image='https://picsum.photos/200/300';
let image2='https://picsum.photos/200/300/?blur';

 class Demo extends Component{ 
     render(){ 
         return( 
         <div className='bg-color'>
         
           
  <h1 contentEditable='true'> Hello, It's me {this.props.name}, here you get randon beautiful images:</h1>
  <div >
  <img className='pd' src={image} alt='randomImage'/>
  <img src={image} alt='randomImage'/>
  <img className='pd' src={image} alt='randomImage'/>
  </div>
  <p className='show'> The current date is : {date} </p> 
  <p> The current time is : {time}</p>
  <ol >
    <li > dark</li>
    <li> superman</li>
    <li> batman</li>
    <li> spiderman</li>
    <li> shaktimaan</li>
    <li> tom-and-jerry</li>
  </ol>
</div> 
        )}
    };
export default Demo;