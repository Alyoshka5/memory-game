import Card from './Card';

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
let cards: JSX.Element[] = cardObjects.map(cardObject => <Card cardObject={cardObject} key={cardObject.title} />);

export default function CardTable() {
    console.log(cards);

    return (
        <div className="card-table">
            {cards}
        </div>
    );
}