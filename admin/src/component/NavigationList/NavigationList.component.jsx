import React, { useState, useEffect } from "react";
import "./NavigationList.style.scss";
import Axios from "axios";
import CatogoryCheckboxHandler from "../CatogoryCheckboxHandler/CatogoryCheckboxHandler";

function NavigationList({ navigation, catogoryList }) {
  const [navigationState, setNavigationState] = useState(navigation);
  const [editMode, setEditMode] = useState(false);

  const changeHandler = (e) => {
    console.log(e.target.name);
    setNavigationState({ ...navigationState, [e.target.name]: e.target.value });
  };

  const uploadToServer = () => {
    Axios.put(
      `http://localhost:5000/api/navigation/${navigationState._id}`,
      navigationState
    )
      .then(() => console.log("Client has posted navigation to server."))
      .catch((error) => console.log(error.message));
  };

  // --------------------------------Edit-----------------------------------------

  if (editMode)
    return (
      <tr className="NavigationList">
        <td className="column column-id">{navigationState._id}</td>
        <td className="column column-title">
          <input
            type="text"
            title="title"
            value={navigationState.title}
            onChange={(e) => changeHandler(e)}
          />
        </td>

        <td className="column column-catogory">
          <CatogoryCheckboxHandler
            catogoryList={catogoryList}
            parentState={navigationState}
            setParentState={setNavigationState}
          />
        </td>
        <td className="column column-edit">
          <button
            onClick={() => {
              uploadToServer();
              setEditMode(false);
            }}
          >
            Done
          </button>
        </td>
      </tr>
    );
  // --------------------------------View-----------------------------------------
  else {
    return (
      <tr className="NavigationList">
        <td className="column column-id">{navigationState._id}</td>
        <td className="column column-title">{navigationState.title}</td>

        <td className="column column-catogory">
          {navigationState.catogories.map((catogory) => {
            return (
              <div className="catogoryCheck" key={catogory._id}>
                <label>{catogory.title}</label>
              </div>
            );
          })}
        </td>
        <td className="column column-edit">
          <button
            onClick={() => {
              setEditMode(true);
            }}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  }
}

export default NavigationList;
