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
        console.log(numbers);
        alert("Watch out! Grandma's trying to txt");
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
                console.log(res);
                const wordList = res.words;
                console.log(wordList);
                setPossibleWords(wordList);
                secondFetch(wordList);
            })
            .catch((err) => {
                console.log(err);
            });

        setTypedNumbers("");
        console.log(possibleWords[1]);
    }
    function secondFetch(array) {
        const dictionaryOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ strings: array })
        };

        fetch('http://localhost:3001/dictionary', dictionaryOptions)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Bad status code from server.');
                }
                return response.json();
            })
            .then(function (res) {
                console.log(res);
                const actualWordList = res.words;
                console.log(actualWordList);

            })
            .catch((err) => {
                console.log(err);
            });
    }

    const scrollForward = () => {
        setDisplayedWordCount(() => {
            if (displayedWordCount === possibleWords.length) {
                return 0;
            } else {
                return (displayedWordCount + 1);
            }
        })
    }

    const scrollBackward = () => {
        setDisplayedWordCount(() => {
            if (displayedWordCount === 0) {
                return possibleWords.length;
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
                    <div className="key" onClick={keypress} id="2">2</div>
                    <div className="key" onClick={keypress} id="3">3</div>
                    <div className="key" onClick={keypress} id="4">4</div>
                    <div className="key" onClick={keypress} id="5">5</div>
                    <div className="key" onClick={keypress} id="6">6</div>
                    <div className="key" onClick={keypress} id="7">7</div>
                    <div className="key" onClick={keypress} id="8">8</div>
                    <div className="key" onClick={keypress} id="9">9</div>
                    <div className="key" onClick={scrollBackward} id="*"> <img className="nav-arrow" src={process.env.PUBLIC_URL + '/backward.png'} alt="<" /> </div>
                    <div className="key" onClick={submit} id="_"> _</div>
                    <div className="key" onClick={scrollForward} id="#"> <img className="nav-arrow" src={process.env.PUBLIC_URL + '/forward.png'} alt=">" /></div>
                </div>
            </div>
        </div>
    );
}

export default Phone;