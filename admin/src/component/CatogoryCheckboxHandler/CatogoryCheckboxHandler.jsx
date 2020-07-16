import React, { useState, useEffect } from "react";
import "./CatogoryCheckboxHandler.style.scss";

function CatogoryCheckboxHandler({
  catogoryList,
  parentState,
  setParentState,
}) {
  // Product中的catogoryList
  const [productCatogoryList, setProductCatotoryList] = useState(
    parentState.catogories
  );

  const checkboxHandler = (e) => {
    // 被選中的catogory物件
    const catogoryId = e.target.name;
    const newCatogory = catogoryList.find(
      (catogory) => catogory._id === catogoryId
    );

    // 如果product中的catotory沒有此id 就新增一個有這id的catogory物件
    const checkIfExist = productCatogoryList.find(
      (item) => item._id === catogoryId
    );
    if (!checkIfExist) {
      setProductCatotoryList([...productCatogoryList, newCatogory]);
      // 如果有此id，就移除有這id的catogory物件
    } else {
      const array = productCatogoryList.filter((item) => {
        return item._id !== catogoryId;
      });
      setProductCatotoryList(array);
    }
  };

  const clearCheckboxHandler = () => {
    setParentState({ ...parentState, catogories: [] });
    console.log("Clear");
  };

  // useState的callback，在productCatogoryList改變完成後
  // 立即更新productSTate
  useEffect(() => {
    setParentState({ ...parentState, catogories: productCatogoryList });
  }, [productCatogoryList]);

  return (
    <div className="CatogoryCheckboxHandler">
      <div className="checkbox">
        {catogoryList.map((catogory, index) => {
          return (
            <div className="catogoryCheck" key={catogory._id}>
              <input
                type="checkbox"
                name={catogory._id}
                defaultChecked={productCatogoryList.find(
                  (item) => item._id === catogory._id
                )}
                onChange={(e) => checkboxHandler(e)}
              />
              <label>{catogory.title}</label>
            </div>
          );
        })}
        <button
          onClick={() => {
            clearCheckboxHandler();
          }}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}

export default CatogoryCheckboxHandler;
