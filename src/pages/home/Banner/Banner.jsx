import React from 'react';
import slider1 from '../../../assets/slide-1.webp'
import slider2 from '../../../assets/slider2-.webp'
import slider3 from '../../../assets/slider3.webp'

const Banner = () => {
    return (
        <div className="banner-section">
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full relative">
                <img src={slider1} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="slider-content absolute top-[30%] left-[50%]">
                    <p className='text-2xl text-orange-400'>Big fun for kids !!</p>
                    <h1 className='text-5xl mt-3 text-red-500 leading-[60px]'>A World To <br /> Explore</h1>
                    <p className='text-base mt-4 mb-4 text-yellow-600'>Active Toys for Smart And Active Kids.Bring fun and non stop <br /> learning for your little one's.</p>
                    <button className='bg-orange-500 p-2 rounded-lg text-2xl text-white'>Read More</button>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={slider2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
                <div className="slider-content absolute top-[30%] left-[52%]">
                    <p className='text-2xl text-orange-400'>Big fun for kids !!</p>
                    <h1 className='text-5xl mt-3 text-red-500 leading-[60px]'>A World To <br /> Explore</h1>
                    <p className='text-base mt-4 mb-4 text-yellow-600'>Active Toys for Smart And Active Kids.Bring fun and non stop <br /> learning for your little one's.</p>
                    <button className='bg-orange-500 p-2 rounded-lg text-2xl text-white'>Read More</button>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={slider3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                <div className="slider-content absolute top-[30%] left-[50%]">
                    <p className='text-2xl text-orange-400'>Big fun for kids !!</p>
                    <h1 className='text-5xl mt-3 text-red-500 leading-[60px]'>A World To <br /> Explore</h1>
                    <p className='text-base mt-4 mb-4 text-yellow-600'>Active Toys for Smart And Active Kids.Bring fun and non stop <br /> learning for your little one's.</p>
                    <button className='bg-orange-500 p-2 rounded-lg text-2xl text-white'>Read More</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Banner;
