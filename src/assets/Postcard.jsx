import React from 'react'

const Postcard = ({areaName,division,branchtype,deliverystatus,district}) => {
    
  return (
    <div className="card">
                    <div className="var">
                        <p>Name : </p>
                        <p>{areaName}</p>
                    </div>
                    <div className="var">
                        <p>Branch Type : </p>
                        <p>{branchtype}</p>
                    </div>
                    <div className="var">
                        <p>Delivery Status : </p>
                        <p>{deliverystatus}</p>
                    </div>
                    <div className="var">
                        <p>District : </p>
                        <p>{district}</p>
                    </div>
                    <div className="var">
                        <p>Division : </p>
                        <p>{division}</p>
                    </div>
                </div>
  )
}

export default Postcard