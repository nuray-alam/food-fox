import React from 'react';
import { Col } from 'react-bootstrap';
import './food.css'
const Food = (props) => {

    const { id, name, description, img } = props.food;

    return (
        <Col>
            <div className="food text-center p-3">
                <img src={img} alt="" />
                <div className="details my-1">
                    <h4>{name}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </Col>
    );
};

export default Food;