import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
    const [gallery, setGallery] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGallery(data))
    }, [])
    console.log(gallery);
    return (
        <div className="md:flex gap-4 mt-10 mb-10">
            {
                gallery.map(gallerys => <GalleryCard key={gallerys._id} gallery={gallerys} ></GalleryCard>)
            }
        </div>
    );
};

export default Gallery;