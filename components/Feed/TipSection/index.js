import React from 'react';
import styles from './tip-section.module.scss';

const TipSection = () => {
    return (
        <div className={styles.container}>
            <div style={{display: 'flex', justifyContent: 'center'}}>            
                <span className={styles.header}>Health Tips</span>
            </div>
            <div className={styles.section}>
                <span className={styles.tips}>1) Cut back on Salt.</span>
                <span>2) Drink Lots of water.</span>
                <span>3) Avoid Alcohol and tobacco as much as possible.</span>
                <span>4) Regularly check your sitting posture while working.</span>
                <a style={{fontSize: 12, color: 'var(--cta)', cursor:'pointer', textDecoration: 'underline'}}>read more</a>
            </div>
        </div>
    )
}
export default TipSection;