import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodoContainer";

const App = () => {
  return (
    <div>
      <CounterContainer/>
      <hr/>
      <TodosContainer/>
    </div>
  )
}

export default App;