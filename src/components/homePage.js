import React,{useState, useEffect} from 'react';
import '../style/homePage.css';
import Home from './_home';
import TeamPage from './_teamPage';
import TopBar from './_topBar';
import DropDownIcon from '../images/icons/drop-down.png';
import SectionArrowIcon from '../images/icons/section-arrow.png';
import FolderIcon from '../images/icons/folder.svg';
import DocumentIcon from '../images/icons/document.svg';
import EmailIcon from '../images/icons/email.svg';
import PhoneIcon from '../images/icons/phone.svg';

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
            <div className="root-left-bottom">

              <div className="first-drop-down">
                <img src={DropDownIcon} alt="drop down"/>
                <span>personal-info</span>
              </div>
              <div className="first-drop-content">
                <div className="drop-down-elem-row">
                  <div className="drop-down-elem-arrow">
                    <img src={SectionArrowIcon}/>
                  </div>
                  <div className="drop-down-elem-folder">
                    <img className="folder_1" src={FolderIcon}/>
                  </div>
                  <div className="drop-down-elem-content">
                    <span>bio</span>
                  </div>
                </div>
                <div className="folder-content-container">
                  <div className="folder-content-elem">
                    <img src={DocumentIcon} />
                    <span>_hello.js</span>
                  </div>
                  <div className="folder-content-elem">
                    <img src={DocumentIcon} />
                    <span>_team.js</span>
                  </div>
                  <div className="folder-content-elem">
                    <img src={DocumentIcon} />
                    <span>_ceva.js</span>
                  </div>
                </div>

                <div className="drop-down-elem-row">
                  <div className="drop-down-elem-arrow">
                    <img src={SectionArrowIcon}/>
                  </div>
                  <div className="drop-down-elem-folder">
                    <img className="folder_2" src={FolderIcon}/>
                  </div>
                  <div className="drop-down-elem-content">
                    <span>interests</span>
                  </div>
                </div>
                <div className="folder-content-container">
                  <div className="folder-content-elem">
                    <img src={DocumentIcon} />
                    <span>_hello.js</span>
                  </div>
                </div>
                <div className="drop-down-elem-row">
                  <div className="drop-down-elem-arrow">
                    <img src={SectionArrowIcon}/>
                  </div>
                  <div className="drop-down-elem-folder">
                    <img className="folder_3" src={FolderIcon}/>
                  </div>
                  <div className="drop-down-elem-content">
                    <span>education</span>
                  </div>
                </div>

                <div className="folder-content-container">
                  <div className="folder-content-elem">
                    <img src={DocumentIcon} />
                    <span>_hello.js</span>
                  </div>
                  <div className="folder-content-elem">
                    <img src={DocumentIcon} />
                    <span>_ceva.js</span>
                  </div>
                </div>

              </div>
              <div className="first-drop-down">
                <img src={DropDownIcon} alt="drop down"/>
                <span>contacts</span>
              </div>
              <div className="first-drop-content">
                <div className="contacts-container">
                  <div className="contacts-row">
                    <img src={EmailIcon}/>
                    <span>costelCostelus33@gmail.com</span>
                  </div>
                </div>
                <div className="contacts-container">
                  <div className="contacts-row">
                    <img src={PhoneIcon}/>
                    <span>+0754534223</span>
                  </div>
                </div>

              </div>
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