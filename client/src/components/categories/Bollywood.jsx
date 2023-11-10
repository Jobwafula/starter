import React from 'react'
import power from '../../assets/bollywood/power.jpg'
import bang from '../../assets/bollywood/bang.jpg'

export default function Bollywood() {
    const movies = [
        {

            id:0,
            title:'The Power',
            image:`${power}`,
           
        },
        {

            id:1,
            title:'Bang Bang',
            image:`${bang}`,
           
        },
        {

            id:0,
            title:'The Power',
            image:`${power}`,
           
        },
        {

            id:1,
            title:'Bang Bang',
            image:`${bang}`,
           
        },
        {

            id:0,
            title:'The Power',
            image:`${power}`,
           
        },
        {

            id:1,
            title:'Bang Bang',
            image:`${bang}`,
           
        },
        {

            id:0,
            title:'The Power',
            image:`${power}`,
           
        },
        {

            id:1,
            title:'Bang Bang',
            image:`${bang}`,
           
        },{

            id:0,
            title:'The Power',
            image:`${power}`,
           
        },
        {

            id:1,
            title:'title',
            image:`${bang}`,
           
        },{

            id:0,
            title:'title',
            image:`${power}`,
           
        },
        {

            id:1,
            title:'Bang Bang',
            image:`${bang}`,
           
        },
        {

            id:0,
            title:'Power',
            image:`${power}`,
           
        },
        {

            id:1,
            title:'Bang Bang',
            image:`${bang}`,
           
        }]
  return (
    <div className='flex flex-wrap justify-between bg-black'>{movies.map((movie,key)=>{
        return(<div key={movie.id}  className='border-2 rounded'>
            <div className='w-[23rem] h-[20rem] z-[-1]'> <img  className='w-[100%] h-[100%] hover:p-2  hover:cursor-pointer' src={movie.image} />
            <video src='localhost:3000' width='1080px' controls >

            </video>
            </div>
            <div className='mt-[-3rem] bg-black-900   '><h1 className='bg-black text-center text-white'>{movie.title}</h1>
            

</div>
           
            
        </div>)
    })}</div>
  )
}
