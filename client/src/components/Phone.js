import React, { useState } from "react";
function Phone() {

    const [typedNumbers, setTypedNumbers] = useState("");
    const [possibleWords, setPossibleWords] = useState([]);
    const [displayedWordCount, setDisplayedWordCount] = useState(0)

    const keypress = (e) => {
        setPossibleWords([]);
        setDisplayedWordCount(0);
        setTypedNumbers(typedNumbers + e.target.id)
    };

    const submit = async () => {
        if (typedNumbers === "") {
            setPossibleWords([""]);
        } else {
            firstFetch();
        }
    }

    function firstFetch() {
        const numbers = typedNumbers;
        console.log(numbers);   //first console.log
        alert("Watch out! Grandma's trying to txt");
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




return (
    <div className="phone">
        <div className="phonecase">
            <div className="phonescreen">
                <h2 className="onscreen">{typedNumbers}</h2>
                <h2 className="onscreen"> {possibleWords[displayedWordCount]}</h2>
            </div>
            <div className="grid" >
                <div className="key" id="1">1</div>
                <div className="key"><div className="number" onClick={keypress} id="2">2</div><div className="letters">a b c</div></div>
                <div className="key"><div className="number" onClick={keypress} id="3">3</div><div className="letters">d e f</div></div>
                <div className="key"><div className="number" onClick={keypress} id="4">4</div><div className="letters">g h i</div></div>
                <div className="key"><div className="number" onClick={keypress} id="5">5</div><div className="letters">j k l</div></div>
                <div className="key"><div className="number" onClick={keypress} id="6">6</div><div className="letters">m n o</div></div>
                <div className="key"><div className="number" onClick={keypress} id="7">7</div><div className="letters">p q r s</div></div>
                <div className="key"><div className="number" onClick={keypress} id="8">8</div><div className="letters">t u v</div></div>
                <div className="key"><div className="number" onClick={keypress} id="9">9</div><div className="letters">w x y z</div></div>
                <div className="key" onClick={scrollBackward} id="*"> <img className="nav-arrow" src={process.env.PUBLIC_URL + '/backward.png'} alt="<" /> </div>
                <div className="key" onClick={submit} id="_"> _</div>
                <div className="key" onClick={scrollForward} id="#"> <img className="nav-arrow" src={process.env.PUBLIC_URL + '/forward.png'} alt=">" /></div>
            </div>
        </div>
    </div>
);
}

export default Phone;