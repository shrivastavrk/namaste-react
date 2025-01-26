
const RestaurantCard = (props) => {
    const { resData } = props;
    return (
        <div className="res-card">
            <img className="rest-img" 
                    src={resData.img_src}
            alt={resData.name} />
            
            <h3>{resData.name}</h3>
            <h2>{resData.cuisine}</h2>
            <h2>{resData.rating}</h2>
            <h2>{resData.deliveryTime}</h2>
            <h2>{resData.deliveryCharge}</h2>
            <h2>{resData.discount}</h2>
           
        </div>
    );
};

export default RestaurantCard;