
import error from '../../assets/error.webp'

const ErrorPage = () => {
    return (
        <div className='text-center mx-auto'>
            <p className='text-red-600'>404 Page not found </p>
            <img className='mx-auto mt-3' src={error} alt="" />
        </div>
    );
};

export default ErrorPage;