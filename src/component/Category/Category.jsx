import React from 'react'
import Heading from '../Heading/Heading'
import FruitsCat from '../../assets/fruits-and-veggies.png'
import SeaFoodCat from '../../assets/meat-and-seafood.png'
import DairyCat from '../../assets/dairy-and-eggs.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

const Category = () => {
    const renderCards = category.map(card => {
        return (
            <div key={card.id} className="flex-1 basis-[300px] transition-transform hover:scale-105 duration-300 mr-5 ml-5">
                <div className="w-full min-h-[30vh] relative mb-10 flex justify-center">
                    <img 
                        src={card.image} 
                        alt={card.title} 
                        className="absolute bottom-0 w-40 h-auto object-contain"
                    />
                </div>

                <div className="bg-zinc-100 pt-16 p-8 rounded-xl shadow-md hover:shadow-lg transition">
                    <h3 className="text-zinc-800 text-2xl font-bold">{card.title}</h3>
                    <p className="text-zinc-600 mt-3 mb-8">{card.description}</p>
                    <Link to="/fruits" className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg md:text-lg text-md hover:scale-105 hover:to-orange-600 transion-all duration-300 curosor-pointer'>See All</Link>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className="max-w-[1400px] mx-auto py-20">
                <Heading highlight="Shop" heading=" by Category" />
                {/* category card */}
                <div className="flex flex-wrap gap-10 mt-16">
                    {renderCards}
                </div>
            </div>
        </section>
    )
}

export default Category

// ✅ category array
const category = [
    {
        id: 1,
        title: 'Fruits & Veggies',
        description: 'Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.',
        image: FruitsCat
    },
    {
        id: 2,
        title: 'Dairy & Eggs',
        description: 'Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses..',
        image: DairyCat
    },
    {
        id: 3,
        title: 'Meat & SeaFood',
        description: 'High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more',
        image: SeaFoodCat
    }
]
