import React from 'react';

const WordListDisplay = () => {
    const wordList = [
        'cat',
        'dog',
        'book',
        'this'
    ];
    const listItems = wordList.map((word) => <li>{word}</li>);
    
     return (
        <ul>{listItems}</ul>
     )

}

export default WordListDisplay;