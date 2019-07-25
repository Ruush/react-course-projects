import expensesReducer from "../../reducers/expenses";
import { expensesTest } from "../fixtures/expenses";

const expenses = expensesTest;

test("should set default state", () => {
    const state = expensesReducer(undefined, { type: "@@INIT" })
    expect(state).toEqual([])
})

test("should remove expense by id", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
})


test("should not remove expense if id not found", () => {
    const action = {
        type: "REMOVE_EXPENSE",
        id: "-1"
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})

test("should add an expense", () => {
    const action = {
        type: "ADD_EXPENSE",
        expense: {
            id: "40",
            description: "Putas",
            note: "",
            amount: 19500,
            createdAt: 1
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, action.expense])
})

test("should edit an expense", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[2].id,
        updates: {
            description: "Putos"
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[2].description).toEqual(action.updates.description)
})

test("should edit an expense", () => {
    const action = {
        type: "EDIT_EXPENSE",
        id: "654654",
        updates: {
            description: "Putos"
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})