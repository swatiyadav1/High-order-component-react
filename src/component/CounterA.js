import React from "react";

class CounterA extends React.Component{
constructor(props){
    super(props);
    this.state={
        count:0
    }
}
CounterIncrease = () => {
    this.state.count++;
    this.setState({count:this.state.count});
}

render(){
    return(
        <button onClick={this.CounterIncrease}>Counter A : {this.state.count}</button>
    )
}

}


export default CounterA;