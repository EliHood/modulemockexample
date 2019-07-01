import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MyFetch from './MyFetch';

const myStyles = {
     textInput: {
         margin: '20px 0px',
         padding: '8px 0px',
         border: 'none',
         width:'300px',
         borderBottom: '1px solid black',
     },
    
 }
const Fetch = (props) => (
     <div style={myStyles.myCenter}>
       <form onSubmit={props.onSubmit}>
            <input type="text" style={myStyles.textInput} value={props.url} placeholder="enter a url" onChange={props.onChange}/>
        </form>
          <MyFetch url={props.url} method={props.method} valueChange={props.valueChange} postValue={props.postValue}/>
     </div>
)
export default Fetch;
