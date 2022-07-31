import { useContext } from 'react';
import ShoppingItem from '../model/ShoppingItem';
import classes from './Item.module.scss';
import { Context } from './Main';

type ItemProps = {
    item: ShoppingItem;
}

function Item({ item }: ItemProps) {
    const { switchItem } = useContext(Context);
    return (
        <div onClick={() => switchItem(item.id)} className={classes.Item} style={{backgroundColor: item.isNeeded ? '#55D900' : '#A9A9A9'}}>
            <div className={classes.itemName}>{item.name}</div>
            <div className={classes.itemQty}>Qty: {item.quantity}</div>
        </div>
    );
}

export default Item;