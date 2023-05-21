
const FeedBackComments = ({ feedbacks }) => {
    const { picture, name, feedBack } = feedbacks;
    return (
        <div className="flex gap-8" >
            <div className="card w-96 bg-base-100 shadow-xl"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <figure className="px-10 pt-10">
                    <img src={picture} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{feedBack}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedBackComments;