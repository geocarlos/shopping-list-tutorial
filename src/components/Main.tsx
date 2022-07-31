import { createContext, useCallback, useState } from 'react';
import fetchedData from '../mock-data';
import classes from './Main.module.scss';
import Section from './Section';

export const Context = createContext({} as {switchItem: (index: number | string) => void});

function Main() {
    // Temporary
    const [data, setData] = useState(fetchedData);

    const switchItem = useCallback((index: number | string) => {
        const copy = [...data];
        copy[parseInt(index.toString())].isNeeded = !copy[parseInt(index.toString())].isNeeded;
        setData(copy);
    }, [data]);

    return (
        <Context.Provider value={{ switchItem }}>
            <div className={classes.Main}>
                <Section
                    headerText='Items to purchase'
                    headerBgColor='#55D900'
                    data={data.filter(item => item.isNeeded)} />
                <Section
                    headerText='Purchased items'
                    headerBgColor='#A9A9A9'
                    data={data.filter(item => !item.isNeeded)} />
            </div>
        </Context.Provider>
    )
}

export default Main;