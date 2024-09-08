 import React from 'react'
 import Trabajador from './Trabajador'
 
 function ListaTrabajadores() {
    let empleados = [
        { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "https://tse4.mm.bing.net/th?id=OIP.BIxGHGfB9qk0xvzX2t0PpgHaHa&pid=Api&P=0&h=180" },
        { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "https://tse4.mm.bing.net/th?id=OIP.4OJI-HkatJ_ClBg5hxfqhQAAAA&pid=Api&P=0&h=180" },
        { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "https://tse2.mm.bing.net/th?id=OIP.tjXlZ81noB0mWOTwb-qSZQHaEc&pid=Api&P=0&h=180" },
        { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "https://tse2.mm.bing.net/th?id=OIP.bDNkn9rzcDiaxxZ4RN-woQHaHa&pid=Api&P=0&h=180" },
        { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "https://tse1.mm.bing.net/th?id=OIP.uPDWo40ObyW7O0RY1fuzrgHaHa&pid=Api&P=0&h=180" },
        { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "https://tse1.mm.bing.net/th?id=OIP.sYDfHHHA-B_ui8rvLZLwagHaHa&pid=Api&P=0&h=180" },
        { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "https://tse1.mm.bing.net/th?id=OIP.iaXpog_DbUwEhVoarflergAAAA&pid=Api&P=0&h=180" },
        { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "https://tse2.mm.bing.net/th?id=OIP.blgsgPLZsPHhE9u2TGJMUgHaHa&pid=Api&P=0&h=180" },
        { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "https://tse3.mm.bing.net/th?id=OIP.AbKmlkAdPj0UB7f8heCoCgHaEt&pid=Api&P=0&h=180" },
      ]
     
    return (
        <div className='container-Trabajadores'>
            {
                empleados.map((element)=>
                <Trabajador id={element.id} name={element.fullName} title={element.title} department={element.department} imagen={element.pic} ></Trabajador>
                )
            }
            
        </div>
    )
 }
 
 export default ListaTrabajadores
 
