const Shimmer = () => {
    // return <h3>"Shimmer is loading ...." </h3>;
    return (
        <div className="shimmer-effect">
            {Array(10).fill("").map((e, index) => (
            <div key={index} className="shimmer-container">
                <div className="shine photo"></div>
                <div className="shine lines"></div>
                <div className="shine lines"></div>
            </div>)) }
        </div>
    )
};

export default Shimmer;