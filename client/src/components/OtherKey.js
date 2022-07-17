function OtherKey(props) {
    return <div className="key" onClick={props.whenClicked}>
        <img className="otherkey" src={props.src} alt={props.alt} />
    </div>
};

export default OtherKey;
