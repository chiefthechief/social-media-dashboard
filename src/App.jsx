import React, { useState, createContext } from 'react';
import Header from './header/Header';
import UpperBoxes from './upperboxes/UpperBoxes';
import Overview from './overview/Overview'
import LowerBoxes from './lowerboxes/LowerBoxes';
import Facebook from './assets/icon-facebook.svg';
import Twitter from './assets/icon-twitter.svg';
import Instagram from './assets/icon-instagram.svg';
import Up from './assets/icon-up.svg';
import Down from './assets/icon-down.svg';
import Youtube from './assets/icon-youtube.svg';
export const ThemeContext = createContext(null);

const App = () => {
   const [theme, setTheme] = useState('light');
   const toggleTheme = () => {
      setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
   }
   return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
         <div id={theme}>
            <Header
               followers={'23,004'}
            />
            <input type="checkbox" name="switch" id="switch" onClick={toggleTheme}/>
            <label htmlFor="switch" className="label"></label>
            <div className='sections'>
               <UpperBoxes 
                  img1={Facebook}
                  alt1={'an svg of the Facebook logo'}
                  username={'@nathanf'}
                  number={1987}
                  engagement={'FOLLOWERS'}
                  img2={Up}
                  alt2={'an svg of an arrow pointing up'}
                  increase={12}
               />
               <UpperBoxes 
                  img1={Twitter}
                  alt1={'an svg of the Twitter logo'}
                  username={'@nathanf'}
                  number={1044}
                  engagement={'FOLLOWERS'}
                  img2={Up}
                  alt2={'an scg of an arrow pointing up'}
                  increase={99}
               />
               <UpperBoxes 
                  img1={Instagram}
                  alt1={'an svg of the Instagram logo'}
                  username={'@realnathanf'}
                  number={'11k'}
                  engagement={'FOLLOWERS'}
                  img2={Up}
                  alt2={'an svg of an arrow pointing up'}
                  increase={1099}
               />
               <UpperBoxes 
                  img1={Youtube}
                  alt1={'an svg of the Youtube logo'}
                  username={'Nathan F.'}
                  number={8239}
                  engagement={'SUBCRIBERS'}
                  img2={Down}
                  alt2={'an svg of an arrow pointing down'}
                  increase={144}
               />
            </div>
            <Overview />
            <div className='sections'>
               <LowerBoxes 
                  type={'Page Views'}
                  typecount={87}
                  img1={Facebook}
                  alt1={'an svg of the Facebook logo'}
                  img2={Up}
                  alt2={'an svg of an arrow pointing up'}
                  percentage={3}
               />
               <LowerBoxes 
                  type={'Likes'}
                  typecount={52}
                  img1={Facebook}
                  alt1={'an svg of the Facebook logo'}
                  img2={Down}
                  alt2={'an svg of an arrow pointing down'}
                  percentage={2}
                  />
               <LowerBoxes 
                  type={'Likes'}
                  typecount={5462}
                  img1={Instagram}
                  alt1={'an svg of the Instagram logo'}
                  img2={Up}
                  alt2={'an svg of an arrow pointing up'}
                  percentage={2257}
               />
               <LowerBoxes 
                  type={'Profile Views'}
                  typecount={'52k'}
                  img1={Instagram}
                  alt1={'an svg of the Instagram logo'}
                  img2={Up}
                  alt2={'an svg of an arrow pointing up'}
                  percentage={1375}
               />
               <LowerBoxes 
                  type={'Retweets'}
                  typecount={117}
                  img1={Twitter}
                  alt1={'an svg of the Twitter logo'}
                  img2={Up}
                  alt2={'an svg of an arrow pointing up'}
                  percentage={303}
               />
               <LowerBoxes 
                  type={'Likes'}
                  typecount={507}
                  img1={Twitter}
                  alt1={'an svg of the Twitter logo'}
                  img2={Up}
                  alt2={'an svg of an arrow pointing up'}
                  percentage={553}
               />
               <LowerBoxes 
                  type={'Likes'}
                  typecount={107}
                  img1={Youtube}
                  alt1={'an svg of the Youtube logo'}
                  img2={Down}
                  alt2={'an svg of an arrow pointing down'}
                  percentage={19}
               />
               <LowerBoxes 
                  type={'Total Views'}
                  typecount={1407}
                  img1={Youtube}
                  alt1={'an svg of the Youtube logo'}
                  img2={Down}
                  alt2={'an svg of an arrow pointing down'}
                  percentage={12}
               />
            </div>
         </div>
      </ThemeContext.Provider>
   )
}

export default App;