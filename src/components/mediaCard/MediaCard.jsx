import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from "react";

const MediaCard = ({product}) => {

    const [amount, setAmount] = useState(0);

    return (
        <Card sx={{ maxWidth: 350 }} className="container_card">
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

                <Button size="small" onClick={() => amount > 0? setAmount(amount-1) : null } className="btn_card_minus">
                    <i className="fa-solid fa-angles-left" />
                </Button>
                <input type={"text"} disabled={true} value={amount} className="input_count"/>
                <Button size="small" onClick={() => amount < product.stock ? setAmount(amount + 1) : null } className="btn_card_plus">

                    <i className="fa-solid fa-angles-right" />
                </Button>

            </CardActions>
        </Card>
    );
}

export {MediaCard}