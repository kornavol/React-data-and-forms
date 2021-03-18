import './Card.css'

export default function Card(props) {
    return (
        <div className = "card">
            <div className = "flag">
                <img src={props.img} />
            </div>
            <div>{props.name}</div>
        </div>
    );
    
}