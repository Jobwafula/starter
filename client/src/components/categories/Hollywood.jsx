import React from 'react'

export default function Hollywood() {

    const movies = [
        {

            id:0,
            title:'title',
            image:'',
            description:'description'
        },
        {

            id:1,
            title:'title',
            image:'',
            description:'description'
        },{

            id:2,
            title:'title',
            image:'',
            description:'description'
        },{

            id:3,
            title:'title',
            image:'',
            description:'description'
        }
    ]
  return (
    <div className='flex flex-wrap'>
        {movies.map((movie,key)=>{
            return (
                <div key={movies.id}>
                    <h1>{movie.title}</h1>
                    <p>{movie.description}</p>
                </div>
            )
        })}
    </div>
  )
}
