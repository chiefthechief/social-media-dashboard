import React from 'react';

const UpperBoxes = ({img1, alt1, username, number, engagement, img2, alt2, increase}) => {
   return (
      <section className='card'>
         <p><img src={img1} alt={alt1} />{username}</p>
         <p className='bold'>{number}</p>
         <p className='followers'>{engagement}</p>
         <p><img src={img2} alt={alt2} />{increase} today</p>
      </section>
   )
}

export default UpperBoxes;