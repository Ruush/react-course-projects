import React from "react";
import { shallow } from "enzyme";

import { expensesTest } from "../fixtures/expenses";
import ExpenseListItem from "../../components/ExpenseListItem";

test("should render ExpenseListItem with fixture data", () => {
    const wrapper = shallow(<ExpenseListItem {...expensesTest[0]} />)
    expect(wrapper).toMatchSnapshot();
})