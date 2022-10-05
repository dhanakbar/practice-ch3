import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'

function Button({children}) {
  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}

Button.propTypes = {

}

export default Button

