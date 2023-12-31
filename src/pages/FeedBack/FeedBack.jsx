import { useEffect, useState } from "react";
import FeedBackComments from "./FeedBackComments";

const FeedBack = () => {
    const [feedBack, setFeedBack] = useState([])
    useEffect(() => {
        fetch('https://toy-server-liart.vercel.app/feedBack')
            .then(res => res.json())
            .then(data => setFeedBack(data))
    }, [])
    console.log(feedBack);
    return (
        <>
            <div className="mx-auto" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
            <h1 className="font-bold text-6xl text-center mt-20 mb-5">What our Customer Say</h1>
        </div>
            <div className="flex md:flex-row sm:flex-col sm:items-center gap-4">
                {
                    feedBack.map(feedback => <FeedBackComments key={feedback._id} feedbacks={feedback}></FeedBackComments>)
                }
            </div>
        </>
    );
};

export default FeedBack;