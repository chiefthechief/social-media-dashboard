import React from 'react';

const Header = ({followers}) => {
   return (
      <section className="container">
         <div className="container-top">
            <h1>Social Media Dashboard</h1>
            <p className='color'>Total Followers: {followers}</p>
         </div>
         <div className="container-down">
            <p className='color'>Dark Mode</p>
         </div>
      </section>
   )
}

export default Header;