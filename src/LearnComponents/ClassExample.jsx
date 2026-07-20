import React from 'react';

class ClassExample extends React.Component {

  constructor(props){
    super(props);
    this.state={
      count:0
    };
  }

  componentDidMount(){
    alert("Mounted");
  }

  componentDidUpdate(){
    console.log("Updated");
  }

  componentWillUnmount(){
    console.log("Unmounted");
  }

  render(){
    return(
      <div>
        <h1>{this.state.count}</h1>

        <button
        onClick={()=>this.setState({count:this.state.count+1})}>
        Increment
        </button>
      </div>
    );
  }
}

export default ClassExample;