import Expenses from './components/Expenses';

function App() {
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items = {expenses}></Expenses>
    </div>
  );
}

export default App;
