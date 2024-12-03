import axios from "axios";

const BASE_URL =
  "https://react-native-course-b4df5-default-rtdb.firebaseio.com";
export async function storeExpense(expensesData) {
  const response = await axios.post(BASE_URL + "/expenses.json", expensesData);
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  try {
    const response = await axios.get(BASE_URL + "/expenses.json");
    const expenses = [];
    console.log("expenses....", expenses);
    for (const key in response.data) {
      const expensesObj = {
        id: key,
        amount: response.data[key].amount,
        date: new Date(response.data[key].date), // Convert date string to Date object
        description: response.data[key].description,
      };
      expenses.push(expensesObj);
    }
    return expenses;
  } catch (error) {
    return error;
  }
}

export async function updateExpense(id, expenseData) {
  const response = await axios.patch(
    BASE_URL + "/expenses/" + id + ".json",
    expenseData
  );
  return response.data;
}

export async function deleteExpense(id) {
  return axios.delete(BASE_URL + "/expenses/" + id + ".json");
}
