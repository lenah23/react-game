import './App.css';
import { Input, InputsRow } from './components/Inputs/Input.jsx';
import { RandomNum, RundomNumsRow } from './components/Random-Nums/Random-nums';

function App() {
  return (
    <div className="App">
      <RundomNumsRow />
      <InputsRow />
      <h2 className='heading'>ОТКУДА МНЕ ЗНАТЬ СОВПАДАЮТ-ЛИ ЧИСЛА ИЛИ НЕТ ...</h2>
    </div>
  );
}

export default App;
