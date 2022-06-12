import React,{useState,useEffect} from 'react';
import './Team.css';
import Dude_1 from '../images/users/dude_1.png';
import Dude_2 from '../images/users/karen_1.png';
import Dude_3 from '../images/users/karen_3.png';
import Dude_4 from '../images/users/scandura.png';
import Dude_5 from '../images/users/florea_1.png';
import ReactImg from '../images/Stack/react.png';
import FigmaImg from '../images/Stack/figma.png';
import NodeJsImg from '../images/Stack/node.png';
import GraphQLImg from '../images/Stack/graphQL.png';


import UpWorkImg from '../images/upWork.png';
import GitHubImg from '../images/gitHubWhite.png';
import LinkedInImg from '../images/linkedin.png';

const usersInfo =[
    {
        name: 'Damian Gabriel',
        image: Dude_1,
        role: 'Full Stack Web Developer',
        frontEnd: ['react','figma'],
        backEnd: ['nodejs','graphQL'],
        payloadCss: {
            delayShadowBox: 'delay-box-shadow-1'
        }
    },
    {
        name: 'Scandura',
        image: Dude_4,
        role: 'Full Stack Web Developer',
        frontEnd: ['react','figma'],
        backEnd: ['nodejs','graphQL'],
        payloadCss: {
            delayShadowBox: 'delay-box-shadow-2'
        }
    },
    {
        name: 'Karen Karen',
        image: Dude_2,
        role: 'Full Stack Web Developer',
        frontEnd: ['react','figma'],
        backEnd: ['node js','grahpQL'],
        payloadCss: {
            delayShadowBox: 'delay-box-shadow-3'
        }
    },
    {
        name: 'Karen Karen',
        image: Dude_3,
        role: 'Full Stack Web Developer',
        frontEnd: ['react','figma'],
        backEnd: ['node js','grahpQL'],
        payloadCss: {
            delayShadowBox: 'delay-box-shadow-4'
        }
    },
    {
        name: 'Costel',
        image: Dude_5,
        role: 'Full Stack Web Developer',
        frontEnd: ['react','figma'],
        backEnd: ['node js','grahpQL'],
        payloadCss: {
            delayShadowBox: 'delay-box-shadow-4'
        }
    },
    
]
const TeamPage = ()=>{
    return(
        <div className='root-right-content' >
            <div className='users-card-container'>
                {
                    usersInfo.map((el)=>{
                        return(
                            <UserCard
                            details={{...el}}
                        />
                        )
                    })
                }
            </div>
        </div>
    )
}

const UserCard = ({details})=>{
    const SwtichStackImage = (val)=>{
        switch(val){
            case 'react':
                return ReactImg
            case 'figma':
                return FigmaImg
            case 'nodejs':
                return NodeJsImg
            case 'graphQL':
                return GraphQLImg
        }
    }
    const logicShadowCustomDelay = (el)=>{
        let extractClass = el["payloadCss"]["delayShadowBox"]
        console.log("Extract:", extractClass)
        return "user-card-container " + extractClass
    }

    return(
        <div className={logicShadowCustomDelay(details)}>
            <div className='profile-pic'>
                <img src={details.image}/>
            </div>
            <div className='user-details'>
                <div className='user-details-name'>
                    <span>{details.name}</span>
                </div>
                <div className='user-details-role'>
                    <span>{details.role}</span>
                </div>
            </div>
            <div className='user-stack'>
                <div class='user-stack-row'>
                    <div class='user-stack-row-for'>
                        <span>Front End</span>
                    </div>
                    <div className='user-stack-row-items'>
                        {
                            details.frontEnd.map((el)=>{
                                return(
                                    <img src={SwtichStackImage(el)}/>
                                )
                            })
                        }
                    </div>
                </div>
                <div class='user-stack-row'>
                    <div class='user-stack-row-for'>
                        <span>Back End</span>
                    </div>
                    <div className='user-stack-row-items'>
                    {
                            details.backEnd.map((el)=>{
                                return(
                                    <img src={SwtichStackImage(el)}/>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
            <div className='user-links'>
                <div className='user-links-item'>
                    <img src={UpWorkImg} />
                </div>            
                <div className='user-links-item'>
                    <img src={GitHubImg} />
                </div>            
                <div className='user-links-item'>
                    <img src={LinkedInImg} />
                </div>            
                </div>
        </div>
    )
}
export default TeamPage