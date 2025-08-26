import React from "react";

const SecondsCounter = ({value}) => {
    let unidades = value
    return <div className="d-flex">
        <div className="card m-1 bg-dark text-light border border-danger p-1">{unidades % 10}</div>
    </div> 

}
export default SecondsCounter;