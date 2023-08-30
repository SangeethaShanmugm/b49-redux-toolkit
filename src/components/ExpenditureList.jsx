import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteExp } from "../redux/expSlice";
function ExpenditureList() {
  const dispatch = useDispatch();
  //useSelector((state) => state.reducerName.(expSlice.name))
  const expenditureData = useSelector(
    (state) => state.myExpenditure.expenditure
  );
  console.log(expenditureData);

  const deleteExpenditure = (id) => {
    dispatch(deleteExp(id));
  };
  return (
    <div>
      <h4>ExpenditureList</h4>
      <ul>
        {expenditureData.map((exp) => (
          <li key={exp.id}>
            {exp.category}
            <button onClick={() => deleteExpenditure(exp.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenditureList;
