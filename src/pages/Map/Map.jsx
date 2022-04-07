import React from 'react'
import { NavbarPages } from '../../components/navbarPages/NavbarPages'
import { MapUbication} from '../../components/map/MapUbication'
import styles from './Map.module.css'

const Map = () => {
  return (
    <>
    <NavbarPages />
    <h2 className={styles.title_contact}>Our Ubication</h2>
    <MapUbication />
    </>
  )
}

export {Map}