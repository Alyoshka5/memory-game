import Card from './Card';
import { useState, useRef, useEffect } from 'react';

const cardObjects = [
    {title: 'Java', imgUrl: 'java.png' },
    {title: 'Python', imgUrl: 'python.png' },
    {title: 'JavaScript',imgUrl: 'javascript.png' },
    {title: 'Swift', imgUrl: 'swift.jpeg' },
    {title: 'Ruby', imgUrl: 'ruby.png' },
    {title: 'Rust', imgUrl: 'rust.jpeg' },
    {title: 'C++', imgUrl: 'c++.png' },
    {title: 'GO', imgUrl: 'go.png' },
    {title: 'Elixir', imgUrl: 'elixir.jpg' },
    {title: 'Perl', imgUrl: 'perl.jpg' }
]

function handleCardClick() {
    
}

export default function CardTable() {
    const [cards, setCards] = useState(cardObjects.map((cardObject, idx) => <Card cardObject={cardObject} key={idx} />))
    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

    useEffect(() => {
        cardRefs.current.forEach(cardRef => {
            if (cardRef) {
                cardRef.addEventListener('click', handleCardClick);
            }
        });

        const cardRefsArray = cardRefs.current;
        return () => {
            cardRefsArray.forEach(cardRef => {
                if (cardRef) {
                    cardRef.removeEventListener('click', handleCardClick);
                }
            });
        }
    }, []);

    return (
        <div className="card-table">
            {cards.map((card, idx) => (
                <div ref={ref => cardRefs.current[idx] = ref} key={idx}>
                    {card}
                </div>
            ))}
        </div>
    );
}