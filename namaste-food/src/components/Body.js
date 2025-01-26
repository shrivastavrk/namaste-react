import React from 'react';
import RestaurantCard from './RestaurantCard';
import { restaurantData } from '../utils/mockdata';

let listofRestaurants = restaurantData;

const Body = () => {
    return (
        <div className="body">
            <div className="filter">
                <button className='filter-button' onClick={()=>{
                    console.log('Filter by Top Rated Restaurant');
                    listofRestaurants =  listofRestaurants.filter((a,b)=>b.rating-a.rating);
                }}>Top Rated Restaurant</button>    
            </div>
            <div className="res-container">
            {restaurantData.map((res, index) => (
                    <RestaurantCard
                        key={index}
                       resData={res}    
                    />
                ))}    
            </div>
        </div>
    );
};

export default Body;