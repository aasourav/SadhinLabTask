import { City, State } from 'country-state-city';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchAdmin, fetchEmployee, UpdateUsr } from '../features/employee/employeeSlice';
import Button from './Button';

const EditSsection = () => {
    const navigate = useNavigate()
    const data = useParams().data;
    const {first_name,last_name,user_type,division,district,id} = JSON.parse(data);
    
    const [fName,setFname] = useState(first_name);
    const [Lname,setLname] = useState(last_name);
    const [userType,setUserType] = useState(user_type);
    const [div,setDivision] = useState(division.split(' ')[0]);
    const [dis,setDistrict] = useState(district);
    // console.log('District ',district)
    
    const [stateCode] = useState({
        'Barisal' : '06',
        'Chittagong' : 'B',
        'Dhaka' : '13',
        'Khulna' : '27',
        'Mymensingh' : '34',
        'Rajshahi' : '54',
        'Rangpur' : '55',
        'Sylhet' : '60',
    });
    const [stateArr] = useState([
        {div:'Barisal', sCode:'06'},
        {div:'Chittagong', sCode:'B'},
        {div:'Dhaka', sCode:'13'},
        {div:'Khulna', sCode:'27'},
        {div:'Mymensingh', sCode:'34'},
        {div:'Rajshahi', sCode:'54'},
        {div:'Rangpur', sCode:'55'},
        {div:'Sylhet', sCode:'60'},
    ])
    const [state] = useState(State.getStatesOfCountry('BD'));
    const [city] = useState(City.getCitiesOfState('BD',stateCode[div]));
    console.log(division)

    const updateState = (e)=>{
        setDivision(e.target.value)
    }
    const updateCity = (e)=>{
        setDistrict(e.target.value)
    }
    const USRType = (e)=>{
        setUserType(e.target.value)
    }
    const NameChange = (e)=>{
        if(e.target.name==='first'){
            setFname(e.target.value)
           
        }
        else{
            setLname(e.target.value)
        }
    }


    const dispatch = useDispatch();
    const Update_data = ()=>{
     
        dispatch(UpdateUsr({id, data:{
            first_name:fName,
            last_name:Lname,
            user_type:userType,
            division: div,
            district: dis
        }}))
        
        dispatch(fetchAdmin())
        dispatch(fetchEmployee())
        navigate('/')
    }
  return (
    <div className='EditEmployee'>
        <div className='dataDetails'>
            <div>
                <label>First Name </label>
                <br/>
                <label>Last Name </label>
                <br/>
                <label>User Type </label>
                <br/>
                <label>Division </label>
                <br/>
                <label>District </label> 
                <br />
            </div>
            <div className='dataofData'>
                : <input onChange={NameChange} className='Input' type="text" name="first" value={fName}  />
                <br/>
                : <input onChange={NameChange} on className='Input' type="text" name="last" value={Lname} />
                <br/>
                : <select onChange={USRType}>
                    <option selected={userType === 'admin' ? 1 : 0} value="admin">Admin</option>
                    <option  selected={userType === 'employee' ? 1 : 0}  value="employee">Employee</option>
                </select>
                <br/>
                : <select onChange={updateState}>
                    {stateArr.map((data,i)=>(
                        <option key={i} selected={data.div === div? 1 : 0} value={data.div}>{data.div}</option>
                    ))}
                </select>
                <br/>
                : <select onChange={updateCity}>
                    {city.map((data,i)=>(
                        <option key={i} selected={data.name === dis? 1 : 0} value={data.name}>{data.name}</option>
                    ))}
                </select>
                <br/>
            </div>
        </div>
        <Button Event={Update_data} btnClass='btnSuccess' btnName='Update'/>
    </div>
  )
}

export default EditSsection