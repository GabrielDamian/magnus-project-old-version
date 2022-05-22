import React,{useState, useEffect} from 'react';
import './TopBar.css';

const TopBar = ({selectedTab,setSelectedTab})=>{

    const [navElems, setNavElems] = useState(['_hello.js','_team.js'])

    const handleItemClick = (target)=>{
        setSelectedTab(target);
    }
    return (
        <div className='root-right-top'>
            {
                navElems.map((el,index)=>{
                    var classSelected = 'border-bottom-selected';
                    var textSelected = 'tab-item-center'
                    if(index == selectedTab)
                    {
                        classSelected += ' bg-selected'
                        textSelected += ' color-white'
                    }
                    return (
                    <div className='tab-item' onClick={()=>handleItemClick(index)}>
                        <div className={textSelected}>
                            <span>{el}</span>
                        </div>
                        <div className={classSelected}>
                        </div>
                    </div>) 
                })
            }
    </div>
    )
}
export default TopBar;
