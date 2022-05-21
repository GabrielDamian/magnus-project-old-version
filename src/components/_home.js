import React from 'react';
import './Home.css';
import ImageBg from '../images/bg_hello.png';

const Home = ()=>{
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
                                <span>//  bla bla ba </span>
                            </div>
                            <div className='bottom-code-comm'>
                                <span>//  asd w wf 3 wed d was</span>
                            </div>
                            <div className='bottom-code-comm'>
                                <span style={{color: '#4d5bce'}}>
                                    const &nbsp;
                                </span>
                                <span style={{color: '#43d9ad'}}>
                                    githubLink &nbsp;
                                </span>
                                <span style={{color: 'white'}}>
                                    = &nbsp;
                                </span>
                                <span style={{color: '#e99287'}}>
                                    https://github.com/ &nbsp;
                                </span>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='home-right-content'>
                    
                </div>
            </div>
        </div>
    )
}
export default Home;