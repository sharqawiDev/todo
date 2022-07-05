import './App.scss';
import logo from "./assets/devchallenges.png"
import AddTodoBar from './components/AddTodoBar/AddTodoBar';
import TabsBar from './components/TabsBar/TabsBar';
import { useSelector, useDispatch } from "react-redux";
import { changeTab } from "./Redux/tabs";
import { addTodo, completeTodo, removeTodo, removeAllTodos } from "./Redux/todos";
import TodosList from './components/TodosList/TodosList';
function App() {
  const [todos, tabs, activeTab] = useSelector((state) => [
    state.todos.value,
    state.tabs.value,
    state.tabs.activeTab,
  ]
  );
  const dispatch = useDispatch();
  const addToTodosList = (input) => {
    dispatch(addTodo(input))
  }
  const switchTodoState = (todo) => {
    dispatch(completeTodo(todo))
  }

  const getTodos = () => {
    if (activeTab === 1) return todos.filter(todo => !todo.isDone);
    else if (activeTab === 2) return todos.filter(todo => todo.isDone);
    else return todos;

  }
  return (
    <div className="App">
      <header>
        <h1>#todo</h1>
        <a href='https://devchallenges.io/' target={'_blank'} rel={'noreferrer'}>
          <img src={logo} alt={'DevChallenges Logo'} title="DevChallenges Logo" />
        </a>
      </header>
      <TabsBar changeTab={(tab) => dispatch(changeTab(tab))} activeTab={activeTab} tabs={tabs} />
      {activeTab !== 2 && <AddTodoBar addTodo={addToTodosList} />}
      <TodosList todos={getTodos()} completeTodo={switchTodoState} removeTodo={(todo) => dispatch(removeTodo(todo))} removeAllTodos={() => dispatch(removeAllTodos())} activeTab={activeTab} />
      <h4 className='copyright'>Created by <strong><a href='https://github.com/sharqawiDev' rel="noreferrer" target={'_blank'}>Abdulrahman Elsharqawi</a></strong> - DevChallenges.io</h4>
    </div>
  );
}

export default App;
