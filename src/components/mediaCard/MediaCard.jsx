import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";


const MediaCard = ({product}) => {

    return (
        <Card sx={{ maxWidth: 500 }} className="container_card">
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="price_card">
                    ${product.price}
                </Typography>
            </CardContent>
            <CardActions>
            <button className="btn btn-outline-dark px-1 py-2" >
                Add to cart <i className="fa fa-shopping-cart me-1" />
            </button>
                <Link to="/generateBill" className="btn btn-outline-dark ms-2 px-3 py-2">
                    Go to Bill <i className="fa fa-shopping-cart me-1" />
                </Link>

            </CardActions>
        </Card>
    );
}

export {MediaCard}