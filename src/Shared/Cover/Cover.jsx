import './Cover.css'
const Cover = ({ img, title, description }) => {
    return (
        <div className="hero min-h-[600px]" style={{ backgroundImage: `url("${img}")` }} >
            <div className="hero-overlay bg-opacity-10"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-[900px] rounded-md py-20 bg-overlay ">
                    <h1 className="mb-5 text-white text-5xl font-bold uppercase">{title}</h1>
                    <p className="mb-5 md:mx-20 mx-0 text-white">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Cover;