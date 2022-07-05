import styles from '../styles/Item.module.css'
const Item = ({item,timeSelected}) => {

    const colors = {
        Work: 'hsl(15, 100%, 70%)',
        Play: 'hsl(195, 74%, 62%)',
        Study: 'hsl(348, 100%, 68%)',
        Exercise: 'hsl(145, 58%, 55%)',
        Social:'hsl(264, 64%, 52%)',
        Self :'hsl(43, 84%, 65%)'
    }
  return (
    <div className={styles.item}
    >
        <div style={{
          
            backgroundColor: colors[item.title] || colors.Self,
        }}
        className={styles.item_header}
        >
            <img src={`./images/icon-${item.title}.svg`} />
        </div>
        <div className={styles.card_info}>
            <div className={styles.card_title}>
                  <h5>{item.title}</h5>
                  <img src='./images/icon-ellipsis.svg' />
            </div>
          
            <p className={styles.current}>{item.timeframes[timeSelected].current}hrs</p>
            <p className={styles.span}>Last {timeSelected} - {item.timeframes[timeSelected].previous}hrs</p>
        </div>
    </div>
  )
}

export default Item