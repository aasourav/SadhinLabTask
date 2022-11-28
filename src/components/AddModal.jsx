import { City, State } from 'country-state-city';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee, addUser } from '../features/employee/employeeSlice';
import Button from './Button';

const AddModal = ({openModal}) => {
    const [first_name,setFname] = useState('');
    const [last_name,setLname] = useState('');
    const [user_type,setUserType] = useState('');
    const [division,setDivision] = useState('');
    const [district,setDistrict] = useState('');

    
    const dispatch = useDispatch();
    const OnSumbit = ()=>{
        dispatch(addEmployee({id:Math.random(),first_name,last_name,user_type,division,district}))
        dispatch(addUser({id:Math.random(),first_name,last_name,user_type,division,district}))
        openModal();
    }

    const [stateCode] = useState({
        'A' : '06',
        'B' : 'B',
        'C' : '13',
        'D' : '27',
        'H' : '34',
        'E' : '54',
        'F' : '55',
        'G' : '60',
    });
    const [state] = useState(State.getStatesOfCountry('BD'));
    const [city,setCity] = useState();

    const SelectItems = (e)=>{
        console.log(State.getStateByCodeAndCountry(e.target.value,'BD').name) 
        setDivision(State.getStateByCodeAndCountry(e.target.value,'BD').name)
        setCity(City.getCitiesOfState('BD',stateCode[e.target.value]));
    }
    const updateName = (e)=>{
        if(e.target.name === 'first_name'){
            setFname(e.target.value);
        }
        else{
            setLname(e.target.value)
        }
    }
    const updateCity = (e)=>{
        setDistrict(e.target.value)
    }
    const UsrType = (e)=>{
        console.log(e.target.value)
        setUserType(e.target.value)
    }


    console.log(city)

  return (
    <div className='modalBackground'>
            <div className='modalContainer'>
        <form className='formModal'>
            <div>
                <label>First Name</label>
                <br/>
                <label>Last Name</label>
                <br/>
                <label>User Type</label>
                <br/>
                <label>Division</label>
                <br/>
                <label>District</label>
            </div>
            <div className='modalInput'>
                : <input onChange={updateName} type="text" name='first_name' value={first_name}/> <br/>
                : <input onChange={updateName} type="text" name='last_name' value={last_name} /> <br/>
                :<select onChange={UsrType} className='modal_select'  name='UT' >
                   <option>--Select One---</option>
                    <option  value="admin">Admin</option>
                    <option value="employee">employee</option>
                  </select>
                 <br/>
                :<select className='modal_select' name='div_name' onChange={SelectItems}>
                    <option>--Select One---</option>
                    {state.filter((data,i)=>(
                        data.name.split(' ')[1] === 'Division'    
                    )).map((data,i)=>(
                        <option key={i} value={data.isoCode}>{data.name}</option>
                    ))}
                  </select>
                  <br/>
                :<select className='modal_select' name='dis_name' onChange={updateCity}>
                    {!city ? 
                    <option>--Select One---</option>:
                    city.map((data,i)=>(
                        <option key={i} name={data.name} value={data.isoCode}>{data.name}</option>
                    ))}
                  </select>
            </div>
        </form>
        <div className='modalBtns'>
            <Button Event={openModal} btnName='Cancel' btnClass='btnDanger'/>
            <Button Event={OnSumbit} btnName='Submit' btnClass='btnSuccess'/>
        </div>
       
        
    </div>
    </div>
    
  )
}

export default AddModal