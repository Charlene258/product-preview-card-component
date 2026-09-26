import React from 'react'
import desktopProductImg from './assets/images/image-product-desktop.jpg'
import mobileProductImg from './assets/images/image-product-mobile.jpg'
import cartIcon from './assets/images/icon-cart.svg'

const Card = () => {
  return (
    <article className="w-full max-w-sm md:max-w-150 bg-white flex flex-col md:flex-row rounded-lg md:rounded-xl overflow-hidden font-montserrat text-sm text-[#6c7289] font-medium shadow-lg">
        <picture className='w-full md:w-1/2 md:h-auto shrink-0'>
            <source media="(min-width: 768px)" srcSet={desktopProductImg} />
            <img 
                src={mobileProductImg} 
                alt="Gabrielle Essence Eau De Parfum bottle surrounded by foliage" 
                className="w-full h-auto md:h-full object-cover"  />
        </picture>

        <div className="p-8 flex flex-col gap-5">
            <p className="text-xs uppercase tracking-[5px]">Perfume</p>
            <h1 className="text-3xl font-bold font-fraunces text-black mr-4 leading-8">Gabrielle Essence Eau De Parfum</h1>
            <p className='mt-1 leading-5.75'>
            A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
            </p>
            <div className="flex items-center gap-5 my-2">
                <p className='text-[#3c8067] text-3xl font-fraunces font-bold'>
                    <span className='sr-only'>Current price: </span>$149.99
                </p>
                <p className='line-through'>
                    <span className='sr-only'>Original price: </span>$169.99
                </p>
            </div>
            
            <button type='button' className='bg-[#3c8067] text-white py-3.5 rounded-lg font-bold tracking-wider flex justify-center gap-3 items-center hover:bg-[#1b4133] hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3c8067] focus:ring-offset-2 active:scale-[0.98] transition-all duration-150'>
                <img src={cartIcon} alt="" aria-hidden="true" className='w-4 h-4'/>
                Add to Cart
            </button>
        </div>
        
    </article>
  )
}

export default Card