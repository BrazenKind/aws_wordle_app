import styles from "./css/wordle_row.module.css";
import { useState } from 'react';

export default function Wordle_row({data}){

    //const [letters, useLetters] = useState(Array(5).fill("S"));
    //            {data.map((item, index) => <div key={index} className={styles.w}>{item}</div>)}

    return(

        <div className={styles.wrow}>
            <div className={styles.w}>{data[0]}</div>
            <div className={styles.w}>{data[1]}</div>
            <div className={styles.w}>{data[2]}</div>
            <div className={styles.w}>{data[3]}</div>
            <div className={styles.w}>{data[4]}</div>
        </div>

    )
}