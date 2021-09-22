import { Card, Col, Divider, Button } from "antd";
import React from "react";

function FoodBox({food, deleteOneFood }) {

    return (
        <Col>
            <Card
                title={food.name}
                style={{ width: 230, height: 300, margin: 10 }}
            >
                <img src={food.image} height={60} />
                <p>Calories: {food.calories}</p>
                <p>Servings: {food.servings}</p>
                <p>
                <b>Total Calories: {food.calories * food.servings} </b> kcal
                </p>

                <Button onClick={() => deleteOneFood(food.name)} type="primary"> Delete </Button>

            </Card>
        </Col>
    )
}

export default FoodBox;