import { useEffect, useRef, useState } from "react";
import "./App.css";
import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";
import Login from "./components/Login";
import Header from "./components/Header";
import Users from "./components/Users";

const productData = [
  {
    title: "Alma",
    price: 120,
    date: "01.25.23",
    id: "1",
  },

  {
    title: "Food",
    price: 380,
    date: "11.07.23",
    id: "2",
  },

  {
    title: "Juice",
    price: 80,
    date: "05.15.23",
    id: "3",
  },
];

function App() {
  const [newProduct, setNewProduct] = useState(
    JSON.parse(localStorage.getItem("expenseItem")) || productData
  );
  const [isLogin, setIsLogin] = useState(false);
  const someRef = useRef();
  const [user, setUser] = useState(false);

  useEffect(() => {
    const local = localStorage.getItem("login");
    setIsLogin(local);
    const users = localStorage.getItem("user");
    setUser(users);
  }, []);

  useEffect(() => {
    localStorage.setItem("expenseItem", JSON.stringify(newProduct));
  }, [newProduct]);

  function addExpenseHandler(data) {
    setNewProduct([...newProduct, data]);
  }

  function deleteExpense(id) {
    const newData = newProduct.filter((el) => el.id !== id);
    setNewProduct(newData);
  }

  const loginHandler = () => {
    setIsLogin(true);
    localStorage.setItem("login", !isLogin);
  };

  const logOutHandler = () => {
    setIsLogin(false);
    localStorage.removeItem("login");
  };

  function showUsers() {
    setUser(true);
    localStorage.setItem("user", setUser);
  }

  function showExpenses() {
    setUser(false);
    localStorage.removeItem("user");
  }

  return (
    <div className="App">
      <Header
        showUsers={showUsers}
        showExpenses={showExpenses}
        logOutHandler={logOutHandler}
        isLogin={isLogin}
      />

      <>
        {isLogin ? (
          user ? (
            <Users />
          ) : (
            <div>
              <NewExpense addExpenseHandler={addExpenseHandler} ref={someRef} />
              <Expenses
                data={newProduct}
                setNewProduct={setNewProduct}
                onDelete={deleteExpense}
              />
            </div>
          )
        ) : (
          <Login onLogin={loginHandler} />
        )}
      </>
    </div>
  );
}

export default App;
