import React, { useState } from "react";
import LetterKey from './LetterKey';
import OtherKey from './OtherKey';

function Phone() {

    const [typedNumbers, setTypedNumbers] = useState("");
    const [possibleWords, setPossibleWords] = useState([]);
    const [displayedWordCount, setDisplayedWordCount] = useState(0)
    const [sentence, setSentence] = useState("Grandma Says: ");

    const keypress = (e) => {
        setPossibleWords([]);
        setDisplayedWordCount(0);
        setTypedNumbers(typedNumbers + e.target.id)
    }

    const scrollForward = () => {
        setDisplayedWordCount(() => {
            if (displayedWordCount === possibleWords.length-1) {
                return 0;
            } else {
                return (displayedWordCount + 1);
            }
        })
    }
    
    const scrollBackward = () => {
        setDisplayedWordCount(() => {
            if (displayedWordCount === 0) {
                return possibleWords.length-1;
            } else {
                return (displayedWordCount - 1);
            }
        })
    }

const selectWord = () => {
    if (displayedWordCount.length !== 0){setSentence(sentence + possibleWords[displayedWordCount]+" ") };
    possibleWords([])
};

    function submit(){
        if (typedNumbers === "") {
            setPossibleWords([""]);
        } else {
            getActualWords();
        }
    }

    function getActualWords() {
        const numbers = typedNumbers;
        console.log(numbers);                                    //first console.log
        setPossibleWords(["Calculating...slow like Grandma"])
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ string: numbers })
        };

        fetch('http://localhost:3001/api', requestOptions)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Bad status code from server.');
                }
                return response.json();
            })
            .then(function (res) {
                const wordList = res.words;
                console.log(wordList);
                if (wordList.length === 0){
                    setPossibleWords(["No possible words"]);
                } else {
                    setPossibleWords(wordList);   
                }
                
            })
            .catch((err) => {
                console.log(err);
            });

        setTypedNumbers("");
         };

return (
    <div className="phone">
        <div className="phonecase">
            <div className="phonescreen">
                <h2 className="onscreen">{typedNumbers}</h2>
                <h2 className="onscreen"> {possibleWords[displayedWordCount]}</h2>
            </div>
            <div className="grid" >
                <OtherKey whenClicked={selectWord} src={process.env.PUBLIC_URL + '/tick.png'} alt="tick" />
                <LetterKey id="2" letters="a b c" whenClicked={keypress}/>
                <LetterKey id="3" letters="d e f" whenClicked={keypress}/>
                <LetterKey id="4" letters="g h i" whenClicked={keypress}/>
                <LetterKey id="5" letters="j k l" whenClicked={keypress}/>
                <LetterKey id="6" letters="m n o" whenClicked={keypress}/>
                <LetterKey id="7" letters="p q r s" whenClicked={keypress}/>
                <LetterKey id="8" letters="t u v" whenClicked={keypress}/>
                <LetterKey id="9" letters="w x y z" whenClicked={keypress}/>
                <OtherKey whenClicked={scrollBackward}src={process.env.PUBLIC_URL + '/backward.png'} alt="<" />
                <LetterKey id="_" whenClicked={submit}/>
                <OtherKey whenClicked={scrollForward}src={process.env.PUBLIC_URL + '/Forward.png'} alt=">" />
                
            </div>
        </div>
        <p> {sentence}</p>
    </div>
);
}

export default Phone;