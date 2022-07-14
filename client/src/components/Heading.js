
function Heading() {
    return <div className="heading">
        <h1>For the love of Grandma</h1>
        <h2>Texting service</h2>
        <img className="grandma-img" src={process.env.PUBLIC_URL + '/grandma.png'} alt="img"></img>
      </div>;

};

export default Heading;
