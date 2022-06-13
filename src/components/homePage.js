import React,{useState, useEffect} from 'react';
import '../style/homePage.css';
import Home from './_home';
import TeamPage from './_teamPage';
import Page_1 from './_page_1';
import TopBar from './_topBar';
import DropDownIcon from '../images/icons/drop-down.png';
import SectionArrowIcon from '../images/icons/section-arrow.png';
import FolderIcon from '../images/icons/folder.svg';
import DocumentIcon from '../images/icons/document.svg';
import EmailIcon from '../images/icons/email.svg';
import PhoneIcon from '../images/icons/phone.svg';

const HomePage = ()=>{

    const [selectedTab, setSelectedTab]= useState('_hello.js');
    const [navElems, setNavElems] = useState(['_hello.js'])
    
    const [collapseSections, setCollapseSections] = useState({
      bio: true,
      interests: false,
      education: false
    })
    useEffect(()=>{
      console.log("collapse updated:",collapseSections)
    },[collapseSections])

    const handleCollapse = (who)=>{
      console.log("coolapse",who,collapseSections)
      
      setCollapseSections((prev)=>{
        let copy = {...prev}
        
        copy[who] = !prev[who]
        console.log("br:",prev)
        return copy
      })
    }

    const generateCollapse = (forWho)=>{
      if(collapseSections[forWho])
      {
        return 'none'
      }
      else 
      {
        return 'block'
      }
    }
    //'_team.js','_page_1.js'

    const decideTab = ()=>{
      //'_hello.js','_team.js','_page_1.js'
      switch(selectedTab)
      {
        case '_hello.js':
          return <Home/>

        case '_team.js':
          return <TeamPage/>

        case '_page_1.js':
          return <Page_1/>

      }
    }
    const handleDocumentClick = (who)=>{
      console.log("handle document click:", who);
      if(navElems.includes(who))
      {
        setSelectedTab(who)
      }
      else 
      {
        setNavElems((prev)=>{
          return [...prev,who]
        })
        setSelectedTab(who);
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
                <div className="drop-down-elem-row" onClick={()=>handleCollapse('bio')}>
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
                <div className="folder-content-container" style={{display:generateCollapse('bio')}}>
                  <div className="folder-content-elem" onClick={()=>handleDocumentClick('_hello.js')}>
                    <img src={DocumentIcon} />
                    <span>_hello.js</span>
                  </div>
                  {/* <div className="folder-content-elem">
                    <img src={DocumentIcon} />
                    <span>_team.js</span>
                  </div>
                  <div className="folder-content-elem">
                    <img src={DocumentIcon} />
                    <span>_ceva.js</span>
                  </div> */}
                </div>

                <div className="drop-down-elem-row" onClick={()=>handleCollapse('interests')}>
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
                <div className="folder-content-container" style={{display:generateCollapse('interests')}}>
                  <div className="folder-content-elem" onClick={()=>handleDocumentClick('_team.js')}>
                    <img src={DocumentIcon} />
                    <span>_team.js</span>
                  </div>
                </div>
                <div className="drop-down-elem-row" onClick={()=>handleCollapse('education')}>
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

                <div className="folder-content-container" style={{display:generateCollapse('education')}}>
                  <div className="folder-content-elem" onClick={()=>handleDocumentClick('_page_1.js')}>
                    <img src={DocumentIcon} />
                    <span>_page1.js</span>
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
            <TopBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} navElems={navElems}/>
            {
              decideTab()
            }
            {/* <Home/> */}
          </div>
       </div>
    )
}

export default HomePage;