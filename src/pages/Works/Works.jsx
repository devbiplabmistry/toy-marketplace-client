import './Works.css'
import icon1 from '../../assets/icon-1_180x.webp'
import icon2 from '../../assets/icon-2_180x.webp'
import icon3 from '../../assets/icon-3_180x.webp'
const Works = () => {
    return (
        <div>
                <h1 className='text-6xl text-center mt-10 font-bold text-orange-400'>Here's how it works</h1>
            <div className="Works-wrapper flex sm:flex-col md:flex-row sm:items-center gap-8 justify-center justify-between mt-8 mb-12">
                <div className="item">
                    <div className="logo">
                        <img src={icon1} alt="" />
                    </div>
                    <div className="content">
                        <h1 className='text-4xl text'>Inspires</h1>
                        <p>Imperdiet massa tincidunt nunc <br /> pulvinar sapien et ligula <br /> ullamcorper. Elementum sagittis.</p>
                    </div>
                </div>
                <div className="item">
                    <div className="logo">
                        <img src={icon2} alt="" />
                    </div>
                    <div className="content">
                        <h1 className='text-4xl text'>Encouraging</h1>
                        <p>Morbi tincidunt ornare massa <br /> eget. Ullamcorper a lacus <br /> vestibulum sed arcu non odio.</p>
                    </div>
                </div>
                <div className="item">
                    <div className="logo">
                        <img src={icon3} alt="" />
                    </div>
                    <div className="content">
                        <h1 className='text-4xl text'>Creative</h1>
                        <p>Cras semper auctor neque vitae <br /> tempus quam pellentesque. At <br /> augue eget arcu dictum.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Works;