import React from 'react'

export const AnimeInfo = (props) => {
    const {title,images:{jpg:{large_image_url}},source,rank,score,popularity,members,status,rating, duration} = props.animeInfo;



  return (
    <>
        <div className='anime-content'>
            <h3>{title}</h3> <br />
            <img src={large_image_url} alt='' />
            <div className='info'>
                <h3>#rank: {rank} </h3>
                <h3>#source: {source} </h3>
                <h3>#score: {score} </h3>
                <h3>#popularity: {popularity} </h3> <hr/> <br/>
                <h4>#members: {members} </h4>
                <h4>#status: {status} </h4>
                <h4>#rating: {rating} </h4>
                <h4>#duration: {duration} </h4>
            </div>
        </div>
    
    </>
  )
}
