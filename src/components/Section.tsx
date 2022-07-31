import ShoppingItem from '../model/ShoppingItem';
import Item from './Item';
import classes from './Section.module.scss';

export type SectionProps = {
    headerText: string;
    headerBgColor: string;
    data: Array<ShoppingItem>
}

function Section({ data, headerText, headerBgColor }: SectionProps) {
    return (
        <div className={classes.Section}>
            <div className={classes.sectionHeader} style={{background: headerBgColor}}>{headerText}</div>
            {data.map((item, index) => (
                <Item key={item.name} item={item} />
            ))}
        </div>
    )
}

export default Section;