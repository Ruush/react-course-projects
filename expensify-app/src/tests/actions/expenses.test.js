import { addExpense, removeExpense, editExpense } from "../../actions/expenses";

test("Should setup remove expense action object", () => {
    const action = removeExpense({ id: "123abc" });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: "123abc"
    })
})

test("Should setup EDIT expense action object", () => {
    const id = "123abc";
    const updates = { note: "new Note value" }
    const action = editExpense(id, updates);
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id,
        updates
    })
})


test("Should setup ADD expense action object", () => {
    const expenseData = {
        description: "Rent",
        amount: 109500,
        createdAt: 1000,
        note: 'this wat last months rent'
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test("Should setup ADD expense action object WITH DEFAULT VALUES", () => {
    const action = addExpense();
    //console.log(action)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: "",
            note: "",
            amount: 0,
            createdAt: 0
        }
    });
});