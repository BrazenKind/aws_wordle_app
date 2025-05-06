'use client'
import styles from './css/wordle_box.module.css';
import Wordle_row from './wordle_row.tsx';
import Word_setter from './word_setter.tsx';
import { useState } from 'react';
import { FixedSizeList as List } from 'react-window';

interface Props{
    wrows: string[];
}

export default function Wordle_box({wordData}: any){

    const rows = new Array(6).fill(0);

    let [wrow1, setWrow1] = useState("");
    let [wrow2, setWrow2] = useState("");
    let [wrow3, setWrow3] = useState("");
    let [wrow4, setWrow4] = useState("");
    let [wrow5, setWrow5] = useState("");
    let [wrow6, setWrow6] = useState("");
    let wrows = [wrow1, wrow2, wrow3, wrow4, wrow5, wrow6];

    let [secret, setSecret] = useState("OPENS");
    const url = "https://d6efzmgcn7.execute-api.us-east-2.amazonaws.com/test-1_5/";

    async function getWord(){
        try{
            const response = await fetch(url, {method: "POST", body: JSON.stringify({secret: secret})});
            console.log(JSON.stringify({secret: secret}));
            console.log(response);
            const body = await response.json();
            console.log(body);
            const result = body['result'];
            console.log(result);

            for (let i=0; i<Object.keys(result).length; i++){
                console.log(i);
                switch(i){
                    case 0:
                        setWrow1("TEARS");
                        break;
                    case 1:
                        setWrow2(result[i]['curGuess']);
                        break;
                    case 2:
                        setWrow3(result[i]['curGuess']);
                        break;
                    case 3:
                        setWrow4(result[i]['curGuess']);
                        break;
                    case 4:
                        setWrow5(result[i]['curGuess']);
                        break;
                    case 5:
                        setWrow6(result[i]['curGuess']);
                        break;
                }
            }

        } catch(e){
            console.log(e);
        }
    }


    return(
         <div className={styles.box}>
            {wrows.map((_, i) => <Wordle_row key={i} data={wrows[i]}></Wordle_row>)}
            <button onClick={getWord}>Getword</button>
            <Word_setter wordData={wordData} secretSetter={setSecret}></Word_setter>
            <div> {secret} </div>
         </div>
    );
}