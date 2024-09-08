import React from 'react'
import Avatar from './Avatar'



function Trabajador(props) {
   
      
    return (
        <div onClick={props.id} className='trabajador'>
       <Avatar avatar={props.imagen}></Avatar>
            <div>
                <p className='name'>{props.name}</p>
                <p className='profesion'>{props.title}</p>
            </div>
                <span className='departamento'>{props.department}</span>
             
            
        </div>
    )
}

export default Trabajador
