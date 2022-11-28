import React from 'react'
import AddModal from './AddModal'
import Button from './Button'

const DetailsEmployee = ({fName='kasem',Lname='ali',uType='admin',div='barisal',dis='jhalokathi'}) => {
  return (
    <div className='DetailsEmployee'>
        <div className='dataDetails'>
            <div>
                <p>First Name</p>
                <p>Last Name</p>
                <p>User Type</p>
                <p>Division</p>
                <p>District</p>
            </div>
            <div className='dataofData'>
                <p>: {fName}</p>
                <p>: {Lname}</p>
                <p>: {uType}</p>
                <p>: {div}</p>
                <p>: {dis}</p>
            </div>
            
        </div>
        <Button btnName='Edit'/>
        <AddModal/>
    </div>
    
  )
}

export default DetailsEmployee