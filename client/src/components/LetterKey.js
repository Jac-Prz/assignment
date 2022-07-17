function LetterKey(props) {
    return <div className="key">
        <div className="number" onClick={props.whenClicked} id={props.id}>{props.id}</div>
        <div className="letters">{props.letters}</div>
    </div>
};

export default LetterKey;
