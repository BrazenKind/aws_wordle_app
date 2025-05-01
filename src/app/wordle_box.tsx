import styles from './css/wordle_box.module.css';
import Wordle_row from './wordle_row.tsx';

export default function Wordle_box({wrows}){

    const rows = new Array(6).fill(0);
    console.log(wrows);


    return(
     <div className={styles.box}>
        {rows.map((_, i) => <Wordle_row key={i} data={wrows[i]}></Wordle_row>)}
     </div>

    )
}