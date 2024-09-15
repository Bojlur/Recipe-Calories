import { useState } from "react";
import Cards from "../Cards";
import Tables from "../Tables";



const Main = () => {
    const [tables, setTables] = useState([]);


    const handleAddToTable = card => {
        const newTables = [...tables, card];
        setTables(newTables);
    }

    return (
        <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Our Recipes</h2>
            <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. <br /> Eget
            urna volutpat curabitur elementum mauris aenean neque.</p>
            <div className="md:flex max-w-7xl mx-auto justify-around mt-8">
                <div>
                    <Cards 
                        handleAddToTable={handleAddToTable}  
                    ></Cards>
                </div>
                <div>
                    <Tables tables={tables}></Tables>
                </div>
            </div>
        </div>
    );
};


export default Main;