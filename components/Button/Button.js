import React from 'react';

import styles from './styles.module.css';



function Button ({children, label, ...props})  {
  return (
        <button  className={styles.button} {...props}>
           {label}
           {children}
        </button>
  )
}

export default Button