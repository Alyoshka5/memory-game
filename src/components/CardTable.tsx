import Card from './Card';
import { useState, useRef, useEffect } from 'react';
import { CardTableProps } from '../types';
import '../styles/CardTable.css';

const cardObjects = [
    {title: 'Java', imgUrl: 'java.jpg' },
    {title: 'Python', imgUrl: 'python.png' },
    {title: 'JavaScript',imgUrl: 'javascript.png' },
    {title: 'Swift', imgUrl: 'swift.jpeg' },
    {title: 'Ruby', imgUrl: 'ruby.png' },
    {title: 'Rust', imgUrl: 'rust.jpeg' },
    {title: 'C++', imgUrl: 'c++.avif' },
    {title: 'GO', imgUrl: 'go.png' },
    {title: 'Elixir', imgUrl: 'elixir.jpg' },
    {title: 'Perl', imgUrl: 'perl.png' }
]

export default function CardTable({ currentScore, setCurrentScore, highScore, setHighScore }: CardTableProps) {
    const [cards, setCards] = useState(cardObjects)
    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
    const clickedCardsRef = useRef<Array<String>>([]);
    const currentScoreRef = useRef<number>(0);
    const highSCoreRef = useRef<number>(0);
    
    useEffect(() => {
        shuffleCards();

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

    const shuffleCards = () => {
        const shuffledCards = cards.sort(() => Math.random() - 0.5);
        setCards([...shuffledCards]);
    }

    const handleCardClick = (e: Event) => {
        if (!e.currentTarget) return;

        const cardContainer = e.currentTarget as HTMLDivElement;
        const card = cardContainer.querySelector('[data-card-title]');
        if (!card) return;

        const cardTitle = card.getAttribute('data-card-title');
        if (!cardTitle) return;

        if (clickedCardsRef.current.includes(cardTitle)) {
            if (currentScoreRef.current > highSCoreRef.current) {
                setHighScore(currentScoreRef.current);
                highSCoreRef.current = currentScoreRef.current;
            }
            setCurrentScore(() => 0);
            currentScoreRef.current = 0;
            clickedCardsRef.current = [];
        } else {
            setCurrentScore((score) => score + 1);
            currentScoreRef.current++;
            clickedCardsRef.current.push(cardTitle);
        }

        shuffleCards();
    }

    return (
        <div className="card-table">
            {cards.map((card, idx) => (
                <div key={idx}>
                    <div ref={ref => cardRefs.current[idx] = ref}>
                        <Card cardObject={card} />
                    </div>
                </div>
            ))}
        </div>
    );
}