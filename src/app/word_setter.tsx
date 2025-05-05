import styles from './css/word_setter.module.css';
import { FixedSizeList as List } from 'react-window';

export default function Word_setter({wordData}: any){
    const row = ({index, style}) => (
        <div style={style}> {wordData[index]} </div>
    );

    return(
      <List height={150} itemCount = {wordData.length} itemSize={35} width={300}>
        {row}
      </List>
    );
}