import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
    const [gallery, setGallery] = useState([])
    useEffect(() => {
        fetch('https://toy-server-liart.vercel.app/toy')
            .then(res => res.json())
            .then(data => setGallery(data))
    }, [])
    // console.log(gallery);
    return (
        <>
        <h1 className='text-6xl text-center mt-10 font-bold text-orange-300'>Gallery</h1>
        <div className="md:flex gap-4 mt-10 mb-10">
            {
                gallery.map(gallerys => <GalleryCard key={gallerys._id} gallery={gallerys} ></GalleryCard>)
            }
        </div>
        </>
    );
};

export default Gallery;