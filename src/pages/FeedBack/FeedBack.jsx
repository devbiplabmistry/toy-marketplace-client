import { useEffect, useState } from "react";
import FeedBackComments from "./FeedBackComments";

const FeedBack = () => {
    const [feedBack, setFeedBack] = useState([])
    useEffect(() => {
        fetch('feedBack.json')
            .then(res => res.json())
            .then(data => setFeedBack(data))
    }, [])
    console.log(feedBack);
    return (
        <>
        <h1 className="font-bold text-6xl text-center mt-20 mb-5">What our Customer Say</h1>
        <div className="flex gap-4">
            {
                feedBack.map(feedback => <FeedBackComments key={feedback.id} feedbacks={feedback}></FeedBackComments>)
            }

        </div>
        </>
    );
};

export default FeedBack;