import { CardProps } from '../types';

export default function Card({ cardObject }: CardProps) {

    return (
        <div className='card' data-card-title={cardObject.title}>
            <img src={'../images/' + cardObject.imgUrl} alt="" className='card-image' style={{width: '100px', height: '100px'}} />
            <div>{cardObject.title}</div>
        </div>
    );
}