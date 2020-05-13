import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const image='https://picsum.photos/200/300';
let image2='https://picsum.photos/200/300/?blur';

 class Demo extends Component{ 
     render(){ 
         return( 
         <div className='bg-color'>
         
           
  <h1 contentEditable='true'> Hello {this.props.name}, Here you get randon beautiful images on every refresh:</h1>
  <div >
  <img className='pd' src={image} alt='randomImage'/>
  <img src={image} alt='randomImage'/>
  <img className='pd' src={image} alt='randomImage'/>
  </div>
  
   
</div> 
        )}
    };
export default Demo;