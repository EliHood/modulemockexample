import React, {Component} from 'react';
import Fetch from './Fetch';
const myStyles = {
    myCenter:{
        display: 'flex', 
        justifyContent: 'center',
   }
}
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            url:'',
            postValue:''
        }
    }
    onChange = (e) => {
        e.preventDefault();
        this.setState({
            url: e.target.value
        })
    }
    valueChange = (e) => {
        e.preventDefault();

        this.setState({
            postValue: e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.url)
    }

  render(){
    return (
      <div style={myStyles.myCenter}>
           <Fetch url={this.state.url}
            onChange={this.onChange}
            onSubmit={this.onSubmit} 
            postValue={this.state.postValue}
            valueChange ={this.valueChange}
            method={'POST'}
            /> 
       </div>
    );
  }
}
export default App;