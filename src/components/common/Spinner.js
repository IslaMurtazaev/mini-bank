import React from 'react';
import spinner from "../../assets/loading.gif";

const Spinner = () => {
    return (<div>
        <img src={spinner} alt="loading" className="spinner"/>
    </div>);
}
 
export default Spinner;
