import ShoppingItem from "../model/ShoppingItem";

const item: ShoppingItem = {
    id: 0,
    name: 'Item',
    quantity: 2,
    isNeeded: true
}

const data: ShoppingItem[] = new Array(10).fill(item).map((i, index) => ({...i, name: i.name + index, id: index}));

export default data;

