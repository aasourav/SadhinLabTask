import React from 'react';
import { useNavigate } from 'react-router-dom';

const List = ({data}) => {
  const navigate = useNavigate();
  const gotoEdit = (e)=>{
    navigate(`/editSection/${JSON.stringify(data)}`)
  }

  return (
    <div key={data.id} className='List_parent'>
      <div className='List'>
       <p>{`${data.first_name} ${data.last_name}`}</p> 
       <i onClick={gotoEdit} className="fas fa-edit"></i>
     </div>
    </div>
    
  )
}

export default List