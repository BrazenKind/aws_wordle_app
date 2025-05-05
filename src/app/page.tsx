import Image from "next/image";
import styles from "./css/page.module.css";
import Wordle_box from "./wordle_box.tsx";
import Wordle_row from "./wordle_row.tsx";

//you can import CSS class styles and use them in HTML elements!
//Example:
// import styles from "./page.module.css";
// <div className={styles.page}>
// Where there's a .class element in page.module.css



export default function Home() {

    function compareWord(w1: string, w2: string){
        return new Array(5).fill(0).map((_, i) => (w1[i] == w2[i])? 2:(w2.indexOf(w1[i]) > -1)? 1:0);
    }


//
//     let [wrow1, setWrow1] = useState("VVVVV");
//     let [wrow2, setWrow2] = useState("VVVVV");
//     let [wrow3, setWrow3] = useState("VVVVV");
//     let [wrow4, setWrow4] = useState("VVVVV");
//     let [wrow5, setWrow5] = useState("VVVVV");
//     let [wrow6, setWrow6] = useState("VVVVV");

    return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Wordle_box></Wordle_box>
      </main>
    </div>
    );
}
