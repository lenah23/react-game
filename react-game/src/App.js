import './App.css';
import { Input } from './components/Inputs/Input.jsx';
import { RandomNum, RundomNumsRow } from './components/Random-Nums/Random-nums';

function App() {
  return (
    <div className="App">
      <RundomNumsRow />
      <Input />
      <h2 className='heading'>ОТКУДА МНЕ ЗНАТЬ СОВПАДАЮТ-ЛИ ЧИСЛА ИЛИ НЕТ ...</h2>
    </div>
  );
}

export default App;
