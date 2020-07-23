import React, {Component} from 'react';
 

const image='https://picsum.photos/330/400';
let image2='https://picsum.photos/200/300/?blur';

 class Demo extends Component{ 
     render(){ 
         return( 
         <div className='bg-color'>
         
           
  <h1 contentEditable='true'> Hello {this.props.name}, Welcome to My Blog page...</h1>
  <div className='img_position'>
  <img className='pd' src={image} alt='randomImage'/>
  <img src={image} alt='randomImage'/>
  <img className='pd' src={image} alt='randomImage'/>
  </div>
</div> 
        )}
    };
export default Demo;