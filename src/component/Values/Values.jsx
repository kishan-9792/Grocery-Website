import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
import Basket from '../../assets/basket-full-vegetables.png'

const Values = () => {
    const leftValues = () => value.slice(0,2).map(item => (
        <div key={item.id} className="flex flex-col  gap-2">
            <span className="flex justify-center items-center bg-gradient-to-b from-orange-500 to-orange-600 text-2xl text-white w-[60px] h-[60px] rounded-full">
                {item.icons}
            </span>
            <h3 className="text-zinc-800 text-2xl font-bold">{item.title}</h3>
            <p className="text-zinc-600 text-sm">{item.para}</p>
        </div>
    ))

    const rightValues = () => value.slice(2).map(item => (
        <div key={item.id} className="flex flex-col items-start text-left gap-2">
            <span className="flex justify-center items-center bg-gradient-to-b from-orange-500 to-orange-600 text-2xl text-white w-[60px] h-[60px] rounded-full">
                {item.icons}
            </span>
            <h3 className="text-zinc-800 text-2xl font-bold">{item.title}</h3>
            <p className="text-zinc-600 text-sm">{item.para}</p>
        </div>
    ))

    return (
        <section>
            <div className="max-w-[1400px] mx-auto px-6 py-16">
                <Heading highlight="Our" heading="Values" />

                <div className="flex flex-col md:flex-row items-center gap-12 mt-10">
                    
                    {/* Left values */}
                    <div className="flex flex-col gap-10 flex-1">
                        {leftValues()}
                    </div>

                    {/* Center Image */}
                    <div className="flex justify-center flex-1">
                        <img src={Basket} alt="Basket" className="w-2/3 md:w-3/4" />
                    </div>

                    {/* Right values */}
                    <div className="flex flex-col gap-10 flex-1">
                        {rightValues()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values

const value = [
    {
        id : 1,
        title:'Trust',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icons:<FaHeart />
    },
    {
        id : 2,
        title:'Always Fresh',
        para: 'It is a long established fact that a reader will be distracted by the readable',
        icons:<FaLeaf />
    },
    {
        id : 3,
        title:'Food Safety',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icons:<FaShieldAlt />
    },
    {
        id : 4,
        title:'100% Organic',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        icons:<FaSeedling/>
    },
]
