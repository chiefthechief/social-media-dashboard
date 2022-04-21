import React from 'react';

const LowerBoxes = ({type, typecount, img1, alt1, img2, alt2, percentage}) => {
   return (
      <section className='card lower-card'>
         <div className="leftdiv">
            <p>{type}</p>
            <p className='bold'>{typecount}</p>
         </div>
         <div className='rightdiv'>
            <img src={img1} alt={alt1} className='resize'/>
            <p ><img src={img2} alt={alt2} /> {percentage}%</p>
         </div>
      </section>
   )
}

export default LowerBoxes;