import React from "react";
import Wrapper from "../Wrapper";

const CounterB = (props) => {

    const {CounterIncrease,count}  = props;
    return (

        
        <button onClick={CounterIncrease}>Counter B : {count}</button>    )
}


export default Wrapper(CounterB);