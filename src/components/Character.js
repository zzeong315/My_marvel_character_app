import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Character.module.css';

const Character = ({id, img, name}) => {
  return (
    <div key={id} className={styles.box}>
      <Link to={`/character/${id}`} style={{ textDecoration: "none" }}>
        <img className={styles.image} src={`${img}/standard_xlarge.jpg`} />
        <h3 className={styles.name}>{name}</h3>
      </Link>             
    </div>
  )
}

export default Character;
