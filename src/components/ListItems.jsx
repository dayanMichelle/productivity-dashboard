import { useEffect, useState } from "react"
import styles from '../styles/ListItems.module.css'
import Item from "./Item"


const ListItems = ({timeSelected}) => {
    const [items, setItems] = useState([])
    useEffect(()=> {
        const getItems = async () => {
            const response = await fetch('./data.json')
            const data = await response.json()
            setItems(data)
        }
        getItems()
    }, [])
  return (
    <div className={styles.container_list}>
        { 
            items.map(item => (
                <Item timeSelected={timeSelected} item={item} />
            ))
        }
    </div>
  )
}

export default ListItems