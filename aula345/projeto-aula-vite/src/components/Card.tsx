function showAlert() {
    alert('Button clicked!');
}

const Card = ({
    title, 
    description,
    button,
}: {
    title: string;
    description: string;
    button: string;
}
) => {
    return (
        <div>
            <h2>{title}</h2>
            <div>{description}</div>
            <button onClick={showAlert}>{button}</button>
        </div>


    );
};

export default Card;