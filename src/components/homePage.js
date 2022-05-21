import React from 'react';
import '../style/homePage.css';
import Home from './_home';

const HomePage = ()=>{

    return (
       <div className='root-container'>
          <div className='root-left'>
            <div className='root-left-top'>
               
            </div>
          </div>
          <div className='root-right'>
            <div className='root-right-top'>
                <div className='tab-item'>
                    <span>_hello</span>
                </div>
                <div className='tab-item selected-tab-item'>
                    <span>_about-me</span>
                </div>
            </div>
            <Home/>
          </div>
       </div>
    )
}

export default HomePage;