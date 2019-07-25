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

test("should render error for invalid form submission", () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("form").simulate("submit", {
        preventDefault: () => { }
    });
    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test("should set description on input change", () => {
    const value = "New Description";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(0).simulate("change", {
        target: { value }
    });
    expect(wrapper.state("description")).toBe(value);
    expect(wrapper).toMatchSnapshot();
})

test("should set note on input change", () => {
    const value = "New Note";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("textarea").simulate("change", {
        target: { value }
    });
    expect(wrapper.state("note")).toBe(value);
    expect(wrapper).toMatchSnapshot();
})


test("should set amount on input change", () => {
    const value = "23.50";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change", {
        target: { value }
    })
    expect(wrapper.state("amount")).toBe(value);
    expect(wrapper).toMatchSnapshot();
})

test("should not set amount on input change", () => {
    const value = "12.222";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change", {
        target: { value }
    });
    expect(wrapper.state("amount")).toBe("");
    expect(wrapper).toMatchSnapshot();
})