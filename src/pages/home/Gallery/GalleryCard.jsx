import React from 'react';

const GalleryCard = ({ gallery }) => {
    return (
        <div>
            <div className="" data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="2000">
                <img className='w-[285px] h-[190px] rounded-lg' src={gallery.picture} alt="Shoes" />
            </div>
        </div>
    );
};

export default GalleryCard;