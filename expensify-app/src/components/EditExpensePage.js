import React from "react";
//<NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
const EditExpensePage = (props) => {
    return (
    <div>
      Editing the expense with id of {props.match.params.id}
    </div>
  )
};

export default EditExpensePage;