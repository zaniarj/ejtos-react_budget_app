import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget , dispatch,currency} = useContext(AppContext);
    
    
    const handler = (event)=>{
        const val = event.target.value
        if (val > 20000){
            alert("The aount can not be more than 200000")
        }else{
        dispatch({
            type:'SET_BUDGET',
            payload: val
        })

    }}

    return (
        <div className='alert alert-secondary'>
            <label htmlfor="budget_input">Budget {currency}</label>
            <input
            id ="budget_input"
            type = "number"
            defaultValue = {budget}
            onChange = {handler}

            >
            </input>
        </div>
    );
};
export default Budget;
