
const SectionHeading = ({ subheading, heading }) => {
    return (
        <div className="mx-auto text-center md:w-80 my-8">
            <p className="text-indigo-600 font-bold mb-2">-- {subheading} --</p>
            <h3 className="text-3xl font-bold border-b-2 border-indigo-500 bor py-4">{heading}</h3>
        </div>
    );
};

export default SectionHeading;