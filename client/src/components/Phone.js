import React, { useState } from "react";

function Phone() {

    const [typedNumbers, setTypedNumbers] = useState("");
    const [possibleWords, setPossibleWords] = useState([]);

    const keypress = (e) => {
        setTypedNumbers(typedNumbers + e.target.id)
    };

    const submit = async () => {
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
          .then(function(res){
                console.log(res);
                const wordList = res.words;
                console.log(wordList);
                setPossibleWords(wordList);
            })
            .catch((err) => {
                console.log(err);
            });

            setTypedNumbers("");
    }

    return (
        <div className="phone">
            <div className="phonecase">
                <div className="phonescreen">
                    <h2 className="onscreen">{typedNumbers}</h2>
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
                    <div className="key hidden" id="*">*</div>
                    <div className="key" onClick={submit} id="_"> </div>
                    <div className="key hidden" id="#">#</div>
                </div>
            </div>
            <p>{possibleWords}</p>
        </div>
    );
}

export default Phone;