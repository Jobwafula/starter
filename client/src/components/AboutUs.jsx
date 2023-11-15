import React from 'react'

export default function AboutUs() {
    // design from plex
    const data = [
        {
            title:'Large Network',
            text:'No other streaming service delivers content worlwide like We Do'
        },
        {
            title:'Thousands Of Titles',
            text:'No other streaming service delivers content worlwide like We Do'
        }
        ,{
            title:'Device Friendly',
            text:'No other streaming service delivers content worlwide like We Do'
        }
    ]
  return (
    <div>
        {data.map((item,key)=>{
            return(<div>
                <h1 className='text-2xl'>{item.title}</h1>
                <p>{item.text}</p>
            </div>)
        })}
    </div>
  )
}
