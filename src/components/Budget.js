import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget , dispatch} = useContext(AppContext);
    const [currency,total] = useState('')
    const handler = (event)=>{
        if (event.target.value > 20000){
            alert("The aount can not be more than 200000")
        }else if(event.target.value < toatal){
            alert("The budet can not be less than the ampunt already spent")
        }else{
        dispatch({
            name:'SET_BUDGET',
            payload:event.target.value
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
