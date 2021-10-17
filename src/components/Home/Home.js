import React from 'react';
import { Row } from 'react-bootstrap';
import useFoodData from '../../hooks/useFoodData';
import banner from '../../images/banner.jpg'
import Food from '../Food/Food';
const Home = () => {

    const { foods } = useFoodData();
    return (
        <div>
            <div className="banner-section">
                <img src={banner} className="img-fluid px-1 my-2" alt="" />
            </div>
            <h2 className="text-center text-bolder my-2">All Foods</h2>
            <Row xs={2} md={3} lg={4} className="mx-3 my-5 g-5">
                {
                    foods.map(food => <Food key={food.id} food={food}></Food>)
                }
            </Row>
            {/* <div className="foods-section">
            {
                foods.map( food => <Food key= {food.id} food={food}></Food>)
            }
            </div> */}
        </div>
    );
};

export default Home;