import React,{useState,useEffect} from 'react';
import './Team.css';
import Dude_1 from '../images/users/dude_1.png';
import Dude_2 from '../images/users/karen_1.png';
import Dude_3 from '../images/users/miron.png';
import Dude_4 from '../images/users/scandura.png';
import Dude_5 from '../images/users/florea_1.png';
import ReactImg from '../images/Stack/react.png';
import FigmaImg from '../images/Stack/figma.png';
import NodeJsImg from '../images/Stack/node.png';
import GraphQLImg from '../images/Stack/graphQL.png';
import NextJsImg from '../images/Stack/nextJs.png';
import MongoDbImg from '../images/Stack/mongoDb.png';
import SqlImg from '../images/Stack/sql.png';
import MuiImg from '../images/Stack/mui.png';
import DjangoImg from '../images/Stack/django.png';
import PhotohopImg from '../images/Stack/photoshop.png';
import UpWorkImg from '../images/upWork.png';
import GitHubImg from '../images/gitHubWhite.png';
import LinkedInImg from '../images/linkedin.png';
import WebsiteImgs from '../images/website.png'
import JiraImg from '../images/Stack/jira.png';

const usersInfo =[
    {
        name: 'Gabriel Damian',
        image: Dude_1,
        role: 'Full Stack Web Developer',
        stack:{
            frontEnd: ['ReactJs','NextJs','Figma','Material-UI'],
            backEnd: ['NodeJs','GraphQL','MongoDb','SQL',],
        },
        payloadCss: {
            delayShadowBox: 'delay-box-shadow-1'
        },
        socialMedia:[
            {
                img: WebsiteImgs,
                link: 'https://damian-gabriel-portfolio.tk/' 
            },
            {
                img: UpWorkImg,
                link: 'https://www.upwork.com/'
            },
            {
                img:GitHubImg,
                link:'https://github.com/GabrielDamian'
            },
            {
                img:LinkedInImg,
                link:'https://www.linkedin.com/in/gabriel-damian-829a98122/'
            }
    ]
        // [WebsiteImgs,UpWorkImg,GitHubImg,LinkedInImg]
    },
    {
        name: 'Robert Tuianu',
        image: Dude_4,
        role: 'Full Stack Web Developer',
        stack:{
            frontEnd: ['ReactJs','NextJs','Material-UI'],
            backEnd: ['NodeJs','MongoDb','DJango','SQL'],
        },
        payloadCss: {
            delayShadowBox: 'delay-box-shadow-2'
        },
        socialMedia:[{
            img: GitHubImg,
            link: 'https://github.com/Robertzzel'
        },
        {
            img: LinkedInImg,
            link: 'https://www.linkedin.com/in/robert-tutuianu-955535216/'
        }
    ]
    },
    {
        name: 'Denisa Manelista',
        image: Dude_2,
        role: 'Web Designer',
        stack:{
            Stack:['Figma','Photohop']
        },
        payloadCss: {
            delayShadowBox: 'delay-box-shadow-3'
        },
        socialMedia:[
        {
            img: GitHubImg,
            link: 'https://github.com/ElenaDenisa-Chelarasu'
        },
        {
            img: LinkedInImg,
            link: 'https://www.linkedin.com/in/elena-denisa-chelarasu/' 
        },
        ]
    },
   
    {
        name: 'Daniel Florea',
        image: Dude_5,
        role: 'Scrum Master',
        stack:{
            stack: ['Jira']
        },
        payloadCss: {
            delayShadowBox: 'delay-box-shadow-4'
        },
        socialMedia:[{
            img: GitHubImg,
            link: 'https://github.com/AlexFlorea02' 
        },
        {
            img: LinkedInImg,
            link: 'https://www.linkedin.com/in/alex-florea-5396ab108/'
        }]
    },
    {
        name: 'Alex Miron',
        image: Dude_3,
        role: 'General Tank Purpose',
        stack:{
            frontEnd: ['ReactJs','NextJs'],
            backEnd: ['NodeJs','MongoDb','SQL',],
        },
        payloadCss: {
            delayShadowBox: 'delay-box-shadow-4'
        },
        socialMedia:[{
            img: GitHubImg,
            link: 'https://github.com/Marioalexsan'
        },
        {
            img: LinkedInImg,
            link: 'https://www.linkedin.com/in/alexandru-miron-96175823a/'
        }
    ]
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
            case 'ReactJs':
                return ReactImg
            case 'Figma':
                return FigmaImg
            case 'NodeJs':
                return NodeJsImg
            case 'GraphQL':
                return GraphQLImg
            case 'NextJs':
                return NextJsImg
            case 'MongoDb':
                return MongoDbImg
            case 'SQL':
                return SqlImg
            case 'Material-UI':
                return MuiImg
            case 'DJango':
                return DjangoImg
            case 'Photohop':
                return PhotohopImg
            case 'Jira':
                return JiraImg
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
                {
                    Object.keys(details.stack).map((stackRow)=>{
                        return (
                            <div class='user-stack-row'>
                                <div class='user-stack-row-for'>
                                    <span>{stackRow}</span>
                                </div>
                                <div className='user-stack-row-items'>
                                    {
                                        details.stack[stackRow].map((el)=>{
                                            return(
                                                <img src={SwtichStackImage(el)} title={el}/>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='user-links'>
                {
                    details.socialMedia.map((a)=>{
                        return(
                            <div className='user-links-item'>
                                <a href={a.link} target='_blank'>
                                    <img src={a.img} />
                                </a>
                            </div> 
                        )
                    })
                }
            </div>
        </div>
    )
}
export default TeamPage