import Image from "next/image";
import styles from "./css/page.module.css";
import Wordle_box from "./wordle_box.tsx";
import Wordle_row from "./wordle_row.tsx";
import path from 'path';
import { promises as fs } from 'fs';

//you can import CSS class styles and use them in HTML elements!
//Example:
// import styles from "./page.module.css";
// <div className={styles.page}>
// Where there's a .class element in page.module.css



export default async function Home() {

    async function readWords(){
        const filePath = path.join(process.cwd(), 'public', 'word_data/wordle_words.txt');
        const wordData = await fs.readFile(filePath, 'utf8');
        return wordData.split("\n");
    }

    const wordData = await readWords();

    return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Wordle_box wordData={wordData}></Wordle_box>
      </main>
    </div>
    );
}
