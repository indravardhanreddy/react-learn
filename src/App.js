import './App.css';
import ExpenseData from './components/Expenses/ExpenseData';

const App = ()=> {
const expenses = [
  {
    id:'e1',
    title:'Mobiles',
    amount:100,
    date: new Date(2022,7,12)
  },
  {
    id:'e2',
    title:'Laptops',
    amount:200,
    date: new Date(2022,7,22)
  },
  {
    id:'e3',
    title:'Watches',
    amount:50,
    date: new Date(2022,6,21)
  },
]

  return (
    <div className="App">
      <h1>ReACT</h1>
      <ExpenseData items={expenses}></ExpenseData>
    </div>
  );
}

export default App;
