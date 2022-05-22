import React,{useState, useEffect} from 'react';
import '../style/homePage.css';
import Home from './_home';
import TeamPage from './_teamPage';
import TopBar from './_topBar';

const HomePage = ()=>{

    const [selectedTab, setSelectedTab]= useState(0);

    const decideTab = ()=>{
      switch(selectedTab)
      {
        case 0:
          return <Home/>

        case 1:
          return <TeamPage/>

        case 2:
          return <Home/>

      }
    }
    return (
       <div className='root-container'>
          <div className='root-left'>
            <div className='root-left-top'>
            </div>
          </div>
          <div className='root-right'>
            <TopBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
            {
              decideTab()
            }
            {/* <Home/> */}
          </div>
       </div>
    )
}

export default HomePage;