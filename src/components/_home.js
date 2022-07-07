import React,{useState,useEffect} from 'react';
import './Home.css';

const Home = ()=>{
    const [typeWrite, setTypeWrite] = useState({
        first: '',
        second: '',
        equal: '',
        third: ''
    })

    const [sizes, setSizes] = useState({
        first: 5,
        second: 10,
        equal:1,
        third: 32

    })
    useEffect(()=>{
        console.log("use effect")
        setTimeout(()=>{
            simulateWritting();
        },3200)
    },[])
    const simulateWritting = ()=>{
        console.log("simulate")
        const first = 'const'
        const second = 'githubLink'
        const equal = '='
        const third = 'https://github.com/GabrielDamian'


        iterateWordAndSetState(first,'first')
        setTimeout(()=>{
            iterateWordAndSetState(second,'second')
        },1500);
        setTimeout(()=>{
            iterateWordAndSetState(equal,'equal')
        },4000)
        setTimeout(()=>{
            iterateWordAndSetState(third,'third')
        },5000)
    } 

    const iterateWordAndSetState = (word,target)=>{
        console.log("here")
        let chunks = word.match(/.{1}/g);
        let currentTimeIndex = 1000;
        chunks.forEach((el)=>{
            setTimeout(()=>{
                console.log(el)

                setTypeWrite((prev)=>{
                    let updated = {...prev}
                    updated[target] = updated[target] + el
                    console.log("updated",updated)
                    return updated
                })
            },currentTimeIndex)
             
            currentTimeIndex += randomRange(100,200);
        })
        console.log(chunks)
    }

    const randomRange = (min,max)=> {

        // find diff
        let difference = max - min;
    
        // generate random number 
        let rand = Math.random();
    
        // multiply with difference 
        rand = Math.floor( rand * difference);
    
        // add with min value 
        rand = rand + min;
    
        return rand;
    }
    return(
        <div className='root-right-content' >
            <div className='home-background'>
                <div className='home-left-content'>
                    <div className='home-left-center'>
                        <div className='top-code-text'>
                            <div className='top-code-first'>
                                <span>Hi all. We are</span>
                            </div>
                            <div className='top-code-second'>
                                <span>Magnus Team</span>
                            </div>
                            <div className='top-code-third'>
                                <span>Full Stack Web Development</span>
                            </div>
                        </div>
                        <div className='bottom-code-text'>
                            <div className='bottom-code-comm'>
                                <span>//  we build </span>
                            </div>
                            <div className='bottom-code-comm'>
                                <span>//  landing pages, websites, </span>
                            </div>
                            <div className='bottom-code-comm'>
                                <span>//web paltforms, anything related to browsers</span>
                            </div>
                            <div className='bottom-code-comm'>
                                <span style={{color: '#4d5bce'}}>
                                    {typeWrite.first} 
                                    {typeWrite.first.length == sizes.first ? <span>&nbsp;</span>:null}
                                </span>
                                <span style={{color: '#43d9ad'}}>
                                    {typeWrite.second} 
                                    {typeWrite.second.length == sizes.second ? <span>&nbsp;</span>:null}

                                </span>
                                <span style={{color: 'white'}}>
                                    {typeWrite.equal} 
                                    {typeWrite.equal.length == sizes.equal ? <span>&nbsp;</span>:null}

                                </span>
                                <span style={{color: '#e99287'}}>
                                    {typeWrite.third}
                                </span>
                                <span className='pointer-animation'>
                                    |
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='home-right-content'>
                    <div className='blur-behind-me'/>
                        <div class="div1 cool_anim" id="one"></div>
                        <div class="div2 cool_anim" id="three"></div>
                </div>
            </div>
        </div>
    )
}
export default Home;