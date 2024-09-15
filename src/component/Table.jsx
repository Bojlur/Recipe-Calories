import PropTypes from 'prop-types';


const Table = ({table}) => {
    const {recipe_id,recipe_name, preparing_time, calories} = table;
    return (
        <div className="">
            <hr className="w-1/3 mx-auto" />
            <div className="overflow-x-auto">
                <table className="table">    
                    <tbody>
                        {/* row 1 */}
                        <tr className="bg-base-200">
                            <th>{recipe_id}</th>
                            <td>{recipe_name.slice(0, 10)}</td>
                            <td>{preparing_time}</td>
                            <td>{calories}</td>
                            <div className="flex items-end">
                                <button className=" btn bg-green-500 rounded-full">Preparing</button>
                            </div>
                        </tr>    
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Table.propTypes = {
    table: PropTypes.object,
    
}
export default Table;