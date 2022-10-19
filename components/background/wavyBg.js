import styles from '../../styles/wavy.module.css'

const WavyBg = () => {
    return (<div className={styles.ocean}>
        <div className={styles.wave}></div>
        <div className={styles.wave}></div>
    </div>)
}

export default WavyBg()