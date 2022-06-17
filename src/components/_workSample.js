import React from 'react';
import '../style/workSample.css';
import CityNeonBg from '../images/workSamples/city-neon.jpg';
import Neon2 from '../images/workSamples/neon_2.jpg';
import Neon3 from '../images/workSamples/neon_3.jpg';


import GitHubImg from '../images/gitHubWhite.png';

export default function Page_1 (){
    const projects = [
        {
            name: 'Real estate app',
            bgImage: CityNeonBg,
            desc: 'Lorem Ipsum is simply dummy text of the ndustry. Lorem I',
            gitHub: 'https://github.com/GabrielDamian/real-estate-app',
            link: 'https://real-estate-app-79f7d.web.app/'
        },
        {
            name: 'Task Manager App',
            bgImage: Neon2,
            desc: 'A type  only onic typesetting, remaining essentially unchanged',
            gitHub: 'https://github.com/GabrielDamian/TasksApp',
            link: 'https://tasksapp-95af6.web.app/'
        },
        {
            name: 'Chat App',
            bgImage: Neon3,
            desc: 'It was popularised in the 1960s with the release of Letraset sheets',
            gitHub: 'https://github.com/GabrielDamian/mess-app-git',
            link: 'https://mess-app-2b4bf.web.app/'

        }    
    ]
    const handleViewProjectClick = (dest)=>{
        window.location.href = dest
    }
    return(
        <div className='work-samples-container'>
            {
                projects.map((el,index)=>{
                    return (
                        <div className='work-sample-elem'>
                            <div className='work-sample-el-title'>
                                <span style={{
                                    color: '#5565e8',
                                    fontWeight: 'bold'
                                    
                                    }}>
                                    Project {index} 
                                </span>
                                <span style={{
                                    color: '#607b96',
                                    marginLeft: '10px'
                                    }}>
                                    // {el.name}
                                </span>
                            </div>
                            <div className='work-sample-main-content'>
                                    <div className='work-sample-main-content-img'>
                                        <img src={el.bgImage}/>
                                    </div>
                                    <div className='work-sample-main-content-data'>
                                        <div className='work-sample-main-content-data-top'>
                                            <span>{el.desc}</span>
                                        </div>
                                        <div className='work-sample-main-content-data-bottom'>
                                            <button className='view-project ' onClick={()=>handleViewProjectClick(el.link)}>view-project</button>
                                            <img src={GitHubImg} onClick={()=>handleViewProjectClick(el.gitHub)}/>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}


