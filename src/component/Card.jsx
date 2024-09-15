import PropTypes from 'prop-types';
import { GiWatch } from "react-icons/gi";
import { DiCodeigniter } from "react-icons/di";


const Card = ({ card, handleAddToTable }) => {
    const { recipe_name, recipe_img, description, calories, preparing_time, ingredients } = card;
    return (
        <div className="md:w-2/3">
            <div className="card bg-base-100 w-96 border border-gray-200">
                <img className='p-4' src={recipe_img} alt={recipe_name} />
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className='text-left text-gray-400'>{description}</p>
                    <hr />
                    <h1 className='tect-2xl font-bold text-left'>Ingredients: {ingredients.length}</h1>
                    <p className='text-left text-gray-400'>
                        {
                            ingredients.map((indredint, idx) => <span key={idx}>
                                <li>{indredint}</li>
                            </span>)
                        }
                    </p>
                    <hr />
                    <div className='flex mt-4'>
                        <p className='flex items-center gap-2'><span><GiWatch /></span> {preparing_time}</p>
                        <p className='flex items-center gap-2'><span><DiCodeigniter /></span>{calories}</p>
                    </div>

                    <div className="card-actions mt-4">
                        <button onClick={() => handleAddToTable(card)} 
                            className="btn bg-green-500 rounded-full font-bold">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
    handleAddToTable: PropTypes.func

}

export default Card;