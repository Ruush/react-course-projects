import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import { expensesTest } from "../fixtures/expenses";

test("should render ExpenseForm correctly", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

test("should render ExpenseForm with expense data", () => {
    const wrapper = shallow(<ExpenseForm expense={expensesTest[0]} />);
    expect(wrapper).toMatchSnapshot();
});