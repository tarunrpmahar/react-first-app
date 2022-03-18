import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

//function App() { or
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 94.12,
      date: new Date(2022, 1, 14),
    },
    {
      id: "e2",
      title: "Bike Insurance",
      amount: 84.12,
      date: new Date(2022, 1, 20),
    },
    {
      id: "e3",
      title: "Term Insurance",
      amount: 154.12,
      date: new Date(2022, 1, 25),
    },
    {
      id: "e4",
      title: "Health Insurance",
      amount: 64.12,
      date: new Date(2022, 1, 30),
    },
  ];

  //Newer version
  return (
    <div>
      <NewExpense />
      <Expenses items = {expenses}></Expenses>
    </div>
  );


  //previously we need to import React to use jsx syntax - old version
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started"),
  //   React.createElement(Expenses, { items: expenses })
  // );
}

export default App;
