import Table from "./Table";
import PropTypes from 'prop-types';
const Tables = ({ tables }) => {
    return (
        <div className="ml-4  border border-gray-200 rounded-xl">
            <h1 className="text-3xl font-bold mb-4">Want To Cook: 00</h1>
            <hr className="w-1/3 mx-auto" />
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                        </tr>
                    </thead>
                </table>
            </div>
            {
                tables.map((table, idx) => <Table
                    key={idx}
                    table={table}
                ></Table>)
            }
        </div>
    );
};

Tables.propTypes = {
    tables: PropTypes.array,

}

export default Tables;