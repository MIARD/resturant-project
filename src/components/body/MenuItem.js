import React from 'react'
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap'
import { baseURL } from '../../redux/baseURL';

const MenuItem = props => {
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardBody>
                    <CardImg width="100%" src={baseURL + props.dish.image} alt={props.dish.name}
                        style={{ opacity: "0.5" }} />
                    <CardImgOverlay>
                        <CardTitle style={{ cursor: "pointer" }} onClick={props.DishSelect}>{props.dish.name}</CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    )
}

export default MenuItem;