import React from 'react';
import styles from './NewProductsCard.module.css'

const NewProductsCard = (props) => {
  return (
    <>
    <div className={styles.hotelCard} key={props.slug}>
          <img
            src={props.img}
            alt={props.name}
            className={styles.hotelCard__img}
          />
          <h3 className={styles.hotelCard__name}>{props.name}</h3>
          <p className={styles.hotelCard__description}>{props.description}</p>

          <div className={styles.hotel__location}>
            
          </div>

          <div className={styles.hotelCard__info}>
            <div className={styles.hotelCard__info__room}>
              
              <span className={styles.hotelCard__info__room__text}>
              Reference: {props.reference} 
              </span>
            </div>

            <div className={styles.hotelCard__info__price}>
              <span className={styles.hotelCard__info__price__text}>
                Price: ${props.price}
              </span>
            </div>
          </div>

          <button className={styles.hotelCard__btn}>More...</button>
        </div>
    </>

  )
}

export {NewProductsCard}