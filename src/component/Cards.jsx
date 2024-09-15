import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Card from "./Card";

const Cards = ({handleAddToTable}) => {
    const [cards, setCards] = useState([]);

    useEffect(()=> {
        fetch('data.json')
        .then((res) => res.json())
        .then((data) => setCards(data));
    }, [])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">  
            {
                cards.map(card => <Card
                    key={card.recipe_id}
                    card = {card}
                    handleAddToTable={handleAddToTable}
                ></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    handleAddToTable: PropTypes.func
    
}

export default Cards;