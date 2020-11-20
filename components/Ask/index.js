import React from 'react';
import Image from 'react-bootstrap/Image';

import styles from './ask.module.scss';

const Ask = () => {
    return (
        <div className={styles.container}>
            <Image src="/Feed/doctor-page.svg" height="120" />
            <span style={{ fontSize: 32, fontWeight: 'bold', marginTop: 15 }}>Ask a Doctor</span>
            <span style={{ fontSize: 16 }}>Validate your information and get professional advice from certified doctors.</span>
            <span style={{ fontSize: 16, marginTop: 15, color: 'var(--cta)' }}>Coming Soon!</span>

        </div>
    )
}
export default Ask;