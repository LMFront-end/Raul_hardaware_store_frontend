import React, {useContext, useEffect, useState} from "react";
import { NavbarPages } from '../../components/navbarPages/NavbarPages'
import {URL_API} from "../../utils/data";
import {BillContext} from "../../context/bill/BillContext";
import {MediaCard} from "../../components/mediaCard/MediaCard";
import styles from "./Bill.module.css";

const Bill = () => {

    const {customer, products} = useContext(BillContext);

    console.log(products);


    useEffect(() => {
    }, [])

    return (
        <>
            <NavbarPages />
            <h1 className={styles.title_contact}>Generate Bill for {customer.name}</h1>
            <div className={styles.hotelList}>
                {
                    products.list.map(product => <MediaCard key={product.id} product={product}/>)
                }
            </div>
        </>
    )

}


export {Bill}