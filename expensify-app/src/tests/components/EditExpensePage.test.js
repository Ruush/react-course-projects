import React from "react";
import { shallow } from "enzyme";

import { expensesTest } from "../fixtures/expenses";
import { EditExpensePage } from "../../components/EditExpensePage";

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            editExpense={editExpense}
            removeExpense={removeExpense}
            history={history}
            expense={expensesTest[2]}
        />
    )
});

test("should render editExpensePage", () => {
    expect(wrapper).toMatchSnapshot();
})

test("should handle editExpense", () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expensesTest[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
})

test("should handle removeExpense", () => {
    wrapper.find("button").simulate("click");
    expect(history.push).toHaveBeenLastCalledWith("/");
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expensesTest[2].id });
})