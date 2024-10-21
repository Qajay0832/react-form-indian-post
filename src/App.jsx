import React, { useEffect, useState } from "react";
import Postcard from "./assets/postcard.jsx";
import "./App.css";
import axios from "axios";

const App = () => {
  const [pincode, setPincode] = useState();
  const [cardsData, setCardsData] = useState();
  const [loader,setLoader]=useState(false);
  const handleClick = async () => {
    setLoader(true);
    if (pincode.length > 5) {
      let response = await axios.get(
        `https://api.postalpincode.in/pincode/${Number(pincode)}`
      );
      
      setCardsData(response.data[0].PostOffice);
      setLoader(false)
      if(response.data[0].PostOffice==null){
        alert('Couldn’t find the postal data you’re looking for…')
      }
    }
    else{
      setLoader(false)
      alert('pincode is not 6 digits long')
    }
  };  
  if(loader){
    return <div>
      Loading...
    </div>
  }
  return (
    <div className="mainContainer">
      <div className="searchContainer">
        {cardsData ? (
          <div>
            <div className="var">
              <p className="heading">Pincode :</p>
              <p className="heading">{pincode}</p>
            </div>
            <div className="var">
              <p className="heading">Message :</p>
              <p> Numbers Of pincode found : {cardsData.length}</p>
            </div>
          </div>
        ) : (
          <p className="heading">Enter Pincode</p>
        )}

        <input
          type="number"
          placeholder="Pincode"
          className="searchBar"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        ></input>
        <div>
          <button className="searchBtn" onClick={handleClick}>
            Lookup
          </button>
        </div>
      </div>
      <div className="cards">
        {cardsData &&
          cardsData.map((e, i) => (
            <Postcard
              areaName={e.Name}
              branchtype={e.BranchType}
              deliverystatus={e.DeliveryStatus}
              division={e.Division}
              district={e.District}
              key={i}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
