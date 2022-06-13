import React from 'react';
import '../style/workSample.css';
import CityNeonBg from '../images/workSamples/city-neon.jpg';

export default function Page_1 (){
    const projects = [
        {
            name: 'Real estate app',
            bgImage: CityNeonBg,
            desc: 'asda wf 4r3efd3wfe erf3f54 vf gdf g df g dfg'
        },
        {
            name: 'Real estate app',
            bgImage: CityNeonBg,
            desc: 'asda wf 4r3efd3wfe erf3f54 vf gdf g df g dfg'
        }   
    ]
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
                                            <span>Aafsfeferf wf erf wsdcafsfeferf erf wsdc fsf</span>
                                        </div>
                                        <div className='work-sample-main-content-data-bottom'>
                                            <button>view-project</button>
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


