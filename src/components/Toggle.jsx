import React from 'react'
import styles from './toggle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Toggle = () => {
  return (
//     <div className={styles.body}>
//     <input type="checkbox" className={styles.checkbox} id="checkbox"/>
//   <label for="checkbox" class={ styles.label}>
    
//     {/* <i className={styles.fa-moon} class="fas fa-moon"></i>
//     <i className={styles.fa-sun} class='fas fa-sun'></i> */}
//     {/* <FontAwesomeIcon className={styles.fa-moon} icon="fas fa-moon" />
//     <FontAwesomeIcon className={styles.fa-sun}  icon="fas fa-sun" /> */}
//     <FontAwesomeIcon className={styles.fasun} icon="fa-solid fa-sun" />
//     <FontAwesomeIcon className={styles.famoon} icon="fa-solid fa-moon" />
//     <div className={styles.ball}/>
//   </label>
// </div>
<div>
    <input type="checkbox" class="checkbox" id="checkbox"/>
  <label for="checkbox" class="label">
    <i class="fas fa-moon"></i>
    <i class='fas fa-sun'></i>
   <div class='ball'/>
  </label>
</div>
  )
}

export default Toggle