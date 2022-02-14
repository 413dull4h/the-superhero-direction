import React from 'react';
import './SinVersity.css'

const SinVersity = (props) => {

    const { name, cost, location, worldRank, problemSolved, id, img } = props.versitisy
    return (

        <div className="sinvers">
            <img src={img} alt="" />
            <h3 class="text-start">Name of University:{name}</h3>
            <h4 class="text-start">Cost per year:{cost}</h4>
            <h4 class="text-start">Location of University:{location} </h4>
            <h4 class="text-start">World Rank:{worldRank} </h4>
            <h4 class="text-start">Problem Solved in ACM ICPC:{problemSolved} </h4>
            <h2 class="text-start">Position in ACM ICPC: {id} </h2>
            <button onClick={() => props.handleTotalCost(props.versitisy.id)} className="btn">Total cost to have a B.Sc digree</button>
        </div>

    );
};

export default SinVersity;