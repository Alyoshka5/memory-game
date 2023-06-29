import { CardProps } from '../types';
import '../styles/Card.css';

export default function Card({ cardObject }: CardProps) {

    return (
        <div className='card' data-card-title={cardObject.title}>
            <div className="img-container">
                <img src={'../images/' + cardObject.imgUrl} alt="" className='card-image'/>
            </div>
            <div>{cardObject.title}</div>
        </div>
    );
}