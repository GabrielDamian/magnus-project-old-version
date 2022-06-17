import React,{useState, useEffect} from 'react';
import '../style/homePage.css';
import Home from './_home';
import TeamPage from './_teamPage';
import Page_1 from './_workSample.js';
import AboutUS from './_aboutUs';
import ContactUs from './_contactUs';
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
      bio: false,
      team: true,
      projects: true
    })

    const [collapseBigSections, setCollapseBigSections] = useState({
      personal_info: false,
      contacts: false
    })
    const handleCollapseBigSections = (who)=>{
      if(collapseBigSections[who])
      {
        return 'none'
      }
      else 
      {
        return 'block'
      }
    }
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

    const decideTab = ()=>{
      switch(selectedTab)
      {
        case '_hello.js':
          return <Home/>

        case '_people.js':
          return <TeamPage/>

        case '_workSamples.js':
          return <Page_1/>
        
        case '_aboutUs.js':
          return <AboutUS/>

        case '_contactUs.js':
          return <ContactUs/>
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

    const handleClickCollapseBigSection = (who)=>{
      setCollapseBigSections((prev)=>{
        let copy={...prev}
        copy[who] = !prev[who]
        return copy
      })
    }

    return (
       <div className='root-container'>
          <div className='root-left'>
            <div className='root-left-top'>
            </div>
            <div className="root-left-bottom">

              <div className="first-drop-down"  onClick={()=>handleClickCollapseBigSection('personal_info')} >
                <img src={DropDownIcon} alt="drop down" style={{transform: collapseBigSections['personal_info'] ? 'rotate(-90deg)':'rotate(0deg)'}}/>
                <span>personal-info</span>
              </div>
              <div className="first-drop-content" style={{display: handleCollapseBigSections('personal_info')}}>
                <div className="drop-down-elem-row" onClick={()=>handleCollapse('bio')} style={{cursor: 'pointer'}}>
                  <div className="drop-down-elem-arrow">
                    <img src={SectionArrowIcon } style={{transform: collapseSections['bio'] ? 'rotate(-90deg)':'rotate(0deg)'}}/>
                  </div>
                  <div className="drop-down-elem-folder">
                    <img className="folder_1" src={FolderIcon} />
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
                  <div className="folder-content-elem" onClick={()=>handleDocumentClick('_aboutUs.js')}>
                    <img src={DocumentIcon} />
                    <span>_aboutUs.js</span>
                  </div>
                  {/* <div className="folder-content-elem">
                    <img src={DocumentIcon} />
                    <span>_people.js</span>
                  </div>
                  <div className="folder-content-elem">
                    <img src={DocumentIcon} />
                    <span>_ceva.js</span>
                  </div> */}
                </div>

                <div className="drop-down-elem-row" onClick={()=>handleCollapse('team')} style={{cursor: 'pointer'}}>
                  <div className="drop-down-elem-arrow">
                    <img src={SectionArrowIcon} style={{transform: collapseSections['team'] ? 'rotate(-90deg)':'rotate(0deg)'}}/>
                  </div>
                  <div className="drop-down-elem-folder">
                    <img className="folder_2" src={FolderIcon}/>
                  </div>
                  <div className="drop-down-elem-content">
                    <span>team</span>
                  </div>
                </div>
                <div className="folder-content-container" style={{display:generateCollapse('team')}}>
                  <div className="folder-content-elem" onClick={()=>handleDocumentClick('_people.js')}>
                    <img src={DocumentIcon} />
                    <span>_people.js</span>
                  </div>
                </div>
                <div className="drop-down-elem-row" onClick={()=>handleCollapse('projects')} style={{cursor: 'pointer'}}>
                  <div className="drop-down-elem-arrow">
                    <img src={SectionArrowIcon} style={{transform: collapseSections['projects'] ? 'rotate(-90deg)':'rotate(0deg)'}}/>
                  </div>
                  <div className="drop-down-elem-folder">
                    <img className="folder_3" src={FolderIcon}/>
                  </div>
                  <div className="drop-down-elem-content">
                    <span>projects</span>
                  </div>
                </div>

                <div className="folder-content-container" style={{display:generateCollapse('projects')}}>
                  <div className="folder-content-elem" onClick={()=>handleDocumentClick('_workSamples.js')}>
                    <img src={DocumentIcon} />
                    <span>_workSamples.js</span>
                  </div>
                </div>

              </div>
              <div className="first-drop-down" onClick={()=>handleClickCollapseBigSection('contacts')}>
                <img src={DropDownIcon} alt="drop down" style={{transform: collapseBigSections['contacts'] ? 'rotate(-90deg)':'rotate(0deg)'}}/>
                <span>contacts</span>
              </div>
              <div className="first-drop-content" style={{display: handleCollapseBigSections('contacts')}}>
                
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
                <div className="contacts-container">
                  <div className="contacts-row-btn">
                    <button onClick={()=>handleDocumentClick('_contactUs.js')}>Get in touch</button>
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