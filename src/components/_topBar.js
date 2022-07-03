import React,{useState, useEffect} from 'react';
import './TopBar.css';

const TopBar = ({selectedTab,setSelectedTab,navElems})=>{
    
    const handleItemClick = (target)=>{
        console.log("target:",target);
        setSelectedTab(target);
    }
    return (
        <div className='root-right-top'>
            {
                navElems.map((el,index)=>{
                    var classSelected = 'border-bottom-selected';
                    var textSelected = 'tab-item-center'
                    if(el == selectedTab)
                    {
                        classSelected += ' bg-selected'
                        textSelected += ' color-white'
                    }
                    return (
                    <div className='tab-item' onClick={()=>handleItemClick(el)}>
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
