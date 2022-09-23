import React from "react";

const Wrapper = WrappedComponent => {
    class Wrapper extends React.Component{
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
               <WrappedComponent count={this.state.count}
               CounterIncrease={this.CounterIncrease}

               />
            )
        
        }
    }
        return Wrapper;
}


export default Wrapper;