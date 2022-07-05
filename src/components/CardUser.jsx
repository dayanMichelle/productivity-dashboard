import styles from '../styles/CardUser.module.css'

const CardUser = ({times,handleTimeSelected,timeSelected}) => {
  return (
    <div className={styles.card}>
        <div className={styles.card_header}>
            <img src='./images/image-jeremy.png' />
            <p>Report for</p>
            <h4>Jeremy Robson</h4>
        </div>
        <div className={styles.card_filter}>
            {
                times.map(time => (
                    <p 
                     style={{
                        color: `${timeSelected == time ? 'gray': 'white'} `
                     }}
                     onClick={()=> {
                        handleTimeSelected(time)}
                    }>{time}</p>
                ))
            }
        </div>
    </div>
  )
}

export default CardUser