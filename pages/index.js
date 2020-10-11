import styles from '../styles/Home.module.css';
import WordListDisplay from '../src/components/WordListDisplay';
import WordInput from '../src/components/WordInput';

export default function Home() {
  const wordList = [
    'cat',
    'dog',
    'book',
    'this'
];

  return (
    <div className={styles.container}>
      <WordListDisplay wordList={wordList} />
      <WordInput />
    </div>
  )
}
