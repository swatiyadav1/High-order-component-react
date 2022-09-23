import React from "react";
import Wrapper from "../Wrapper";

const CounterC = (props) => {

    const {CounterIncrease,count}  = props;
    return (
        <button onClick={CounterIncrease}>Counter C : {count}</button>    )
}


export default Wrapper(CounterC);