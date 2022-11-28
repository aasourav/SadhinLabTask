import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddModal from '../components/AddModal'
import Button from '../components/Button'
import List from '../components/List'
import { fetchAdmin, fetchEmployee } from '../features/employee/employeeSlice'


const HomePage = () => {
  const [modal,setModal] = useState(false)
  
  const dispatch = useDispatch();
  const Users = useSelector(state=> state.employee);
  const AdminData = ()=>{
    dispatch(fetchAdmin(1));
  }
  const EmployeData = ()=>{
    dispatch(fetchEmployee(1))
  }
  const ListAdmin = (e)=>{
    dispatch(fetchAdmin(e.target.name));
  }
  const ListEmployee = (e)=>{
    dispatch(fetchEmployee(e.target.name));
  }

  
  const ModalToggle = ()=>{
    console.log('clicked')
    setModal(prev=> !prev);
  }
  

  const arr = [1,2,3,4];
  const brr = [1,2,3,4,5,6,7,8,9,10,11,12];



  
  return (
    <div className='MAIN'>
      {modal? <AddModal openModal={ModalToggle}/> : null}
      <nav>
        <Button Event={ModalToggle} btnClass='btnSuccess' btnName='Add New'/>
      </nav>
      <nav className='adminUser'>
        <div onClick={AdminData} className='userSection forBorder'>Admin User</div>
        <div onClick={EmployeData} className='userSection'>Employee User</div>
      </nav>
      <main className='adminUser'>
        <section className='UserList forBorder'>
        {Users.admin || Users.admin.length<1? 
            Users.admin.map(data => (
              <List key={data.id} data={data}/>
            ))
            
            :
            'No Data'
        }
        <div className='button_list'>
          {Users.admin.length? 
            arr.map((data,i)=>(
            <button key={i} onClick={ListAdmin} name={data} style={{margin:5}}>{data}</button>
          ))
          :
          null
        }
          
        </div>
        </section>
        <section className='UserList'>
        {Users.employee || Users.employee.length<1? 
            Users.employee.map(data => (
              <List key={data.id} data={data}/>
            ))
            
            :
            'No Data'
        }
        <div className='button_list'>
          {Users.employee.length? 
            brr.map((data,i)=>(
            <button key={i} onClick={ListEmployee} name={data} style={{margin:5}}>{data}</button>
          ))
          :
          null
        }
          
        </div>
        </section>
      </main>
    </div>
  )
}

export default HomePage