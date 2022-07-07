import React from 'react';
import '../style/workSample.css';
import RealEstatSs from '../images/projects/real_estate.png';
import TasksAppSs from '../images/projects/task_app.png';
import MessAppSs from '../images/projects/mess_app.png';

import GitHubImg from '../images/gitHubWhite.png';

export default function Page_1 (){
    const projects = [
        {
            name: 'Real estate app',
            bgImage: RealEstatSs,
            desc: 'Real Estate MarketPlace. Buy and sell proprierties based in location and other facilities.',
            gitHub: 'https://github.com/GabrielDamian/real-estate-app',
            link: 'https://real-estate-app-79f7d.web.app/'
        },
        {
            name: 'Task Manager App',
            bgImage: TasksAppSs,
            desc: 'Complete CRUD App to manage work time and task status.',
            gitHub: 'https://github.com/GabrielDamian/TasksApp',
            link: 'https://tasksapp-95af6.web.app/'
        },
        {
            name: 'Chat App',
            bgImage: MessAppSs,
            desc: 'Chat App with friend list feature and live message chat.',
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
                                        <a href={el.link} target='_blank'/>
                                    </div>
                                    <div className='work-sample-main-content-data'>
                                        <div className='work-sample-main-content-data-top'>
                                            <span>{el.desc}</span>
                                        </div>
                                        <div className='work-sample-main-content-data-bottom'>
                                            <a href={el.link} target='_blank'>
                                                <button className='view-project ' >view-project</button>
                                            </a>
                                            <a href={el.gitHub} target='_blank' className='github-img-redirect'>
                                                <img src={GitHubImg} />
                                            </a>
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


