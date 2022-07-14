import React, { useState } from "react";

function Phone() {

    const [typedNumbers, setTypedNumbers] = useState("");
    

    function keypress(e) {
            setTypedNumbers(typedNumbers + e.target.id)
    };


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
                    <div className="key" onClick={keypress} id="_"> </div>
                    <div className="key hidden" id="#">#</div>
                </div>
            </div>
        </div>
    );
}

export default Phone;