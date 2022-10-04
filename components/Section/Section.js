import React from 'react'
import PropTypes from 'prop-types'
import styles from './Section.module.css'

function Section({children}) {
    return (
        <section className={styles.section}>
            {children}
        </section>
    )
}

Section.propTypes = {

}

export default Section

