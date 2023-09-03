
const SectionHeading = ({ subheading, heading }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-indigo-600 font-bold mb-2">-- {subheading} --</p>
            <h3 className="text-3xl font-bold border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionHeading;