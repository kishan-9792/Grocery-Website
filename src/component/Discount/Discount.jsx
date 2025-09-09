import React from 'react'
import Button from '../Button/Button'
import FreshFruits from '../../assets/fresh-fruits.png';

const Discount = () => {
    return (
        <section
            className="bg-zinc-100 bg-center"
            style={{
                backgroundImage: `url(${FreshFruits})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="flex md:flex-row flex-col md:bg-transparent bg-zinc-100 items-center gap-6 max-w-[1400px] mx-auto py-10 px-6">
                {/* Discount Percentage */}
                <span className="text-6xl md:text-9xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center">
                    20%
                </span>

                {/* Content */}
                <div className="max-w-[700px] text-center md:text-left">
                    <h3 className="text-3xl sm:text-4xl md:text-7xl text-zinc-800 font-bold">
                        First order Discount!
                    </h3>
                    <p className="text-zinc-600 my-6 text-base sm:text-lg md:text-justify">
                        Enjoy an exclusive first order discount on our grocery website! Shop
                        fresh essentials and save big on your first purchase. Fast delivery
                        and quality guaranteed.
                    </p>
                    <Button content="Get Discount" />
                </div>
            </div>
        </section>
    )
}

export default Discount
