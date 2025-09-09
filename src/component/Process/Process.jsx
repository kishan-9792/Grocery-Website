import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled , TbCircleNumber2Filled,TbCircleNumber3Filled,TbCircleNumber4Filled} from "react-icons/tb";
import { PiFactory, PiPlant } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";
import { BsTruck } from 'react-icons/bs';



const Process = () => {
            const renderSteps = steeps.map(item=>{
                return(
                    <div className={`flex-1 basic-[300px] ${item.id % 2 ===0 ? 'md:-mt-100' : ""}`} >
                    <span className='flex justify-center w-18 h-18  mx-auto rounded-full text-8xl items-center bg-zinc-800 outline-[3px] text-white outline-offset-7 outline-zinc-800 outline-dashed'>{item.number}</span>  

                    <div className='flex items-center mt-10 gap-x-5' >
                            <span className='flex justify-center items-center text-2xl bg-gradient-to-b from-orange-400 to-orange-500 text-white w-15  h-15 rounded-full'>{item.icon}</span>
                        
                        <div className='flex-1'>
                            <h4 className='text-zinc-800 text-2xl font-bold'>{item.title}</h4>
                            <p className='text-zinc-600 mt-2'>{item.para}</p>
                        </div>
                        </div>  
                    </div>
                )
            })

    return (
        <section>
            <div className='max-w-[1400px] mx-auto px-10 py-20'>
                <div className='mr-auto w-fit'>
                    <Heading highlight="Our " heading="Process" />
                </div>
                <div className='flex flex-wrap gap-y-17  items-center justify-center md:mt-20  mt- pt-50'>
                    {renderSteps}
                </div>

            </div>
        </section>
    )
}

export default Process

const steeps = [
    {
        id : 1,
        number: <TbCircleNumber1Filled />,
        title: 'Sourcing',
        para: "It is a long established fact that a reader",
        icon:<PiPlant />,
        
    },
    {
        id : 2,
        number: <TbCircleNumber2Filled />,
        title: 'Manufacturing',
        para: "It is a long established fact that a reader",
        icon :<PiFactory />,
        
    },
    {
        id : 3,
        number: <TbCircleNumber3Filled />,
        title: 'Quality Control',
        para: "It is a long established fact that a reader",
        icon:<SlBadge />

        
    },
    {
        id : 4,
        number: <TbCircleNumber4Filled />,
        title: 'Logistics',
        para: "It is a long established fact that a reader",
        icon:<BsTruck />

        
    }
]