import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const num = useSelector(state => state.num)
  const addNum = () => {
    dispatch({type:"ADD_NUM", payload: 1})
  }
  const getNum = () => {
    dispatch({type:"GET_NUM",  payload: 1})
  }
  return (
    <div className="App">
      <div>{num}</div>
      <button onClick={() => addNum()}>Добавить число</button>
      <button onClick={() => getNum()}>Убавить число</button>
    </div>
  );
}

export default App;
