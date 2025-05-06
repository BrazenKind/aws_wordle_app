import styles from './css/word_setter.module.css';
import { FixedSizeList as List } from 'react-window';
import { useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';



export default function Word_setter({wordData, secretSetter}){

    const handleClick = (event) => {
        const word = event.target.innerHTML;
        secretSetter(word.trim());
    };

    const handleFilter = (event) => {
        setFilter(event.target.value.toUpperCase());
        setWordEntries(originalWordData.filter(item => item.includes(event.target.value.toUpperCase())));
    };

    let [filter, setFilter] = useState("");
    let [listLen, setListLen] = useState(wordData.length);
    const originalWordData = wordData.map( (item, _) => item.replace('\r', '').toUpperCase());
    let [wordEntries, setWordEntries] = useState(originalWordData);
    const isphone = useMediaQuery('(max-width: 600px)');

    //NOTE: to work around react-window's current limitations, I had to use a callback that doesn't take in any parameters.
    //As a result, I need to access the selected word by reading in the inner HTML of the row element.

    //UNUSED CSS FILTERING
    //{display: ({filter}.length == 0)?'inline':(wordData[index].includes({filter}))?'inline':'none'}
    //(filter.length==0)?styles.listItem:(wordData[index].replace('\r', '').toUpperCase().includes(filter.toUpperCase()))?styles.listItem:styles.hidden
    const row = ({index, style}) => (
        <div className={styles.listItem} style={style} onClick={handleClick}>{wordEntries[index]}</div>
    );

    const wide = 200;
    const narrow = 100;

    return(
        <div className={styles.menuWidth}>
            <List height={150} itemCount = {wordEntries.length} itemSize={35} width={isphone?narrow:wide}>
                {row}
            </List>
            <input className={styles.menuWidth} onChange={handleFilter} placeholder="Search for words to guess..."></input>
        </div>
    );
}