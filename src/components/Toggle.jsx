import React from 'react'
import styles from './toggle.module.css'
const Toggle = () => {
  return (
    <div className={styles.body}>
    <input type="checkbox" className={styles.checkbox} id="checkbox"/>
  <label for="checkbox" class={ styles.label}>
    
    <i className={styles.fa-moon} class="fas fa-moon"></i>
    <i className={styles.fa-sun} class='fas fa-sun'></i>
    <div className={styles.ball}/>
  </label>
</div>
  )
}

export default Toggle