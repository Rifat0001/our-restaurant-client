const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;
    return (
        <div className="flex space-x-4">
            <img className="w-[100px] h-[70px]" style={{ borderRadius: '0 200px 200px 200px' }} src={image} alt="" />
            <div>
                <h3 className="uppercase font-medium">{name}--------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-indigo-500 font-medium">${price}</p>
        </div>
    );
};

export default MenuItem;