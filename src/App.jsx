import AppName from "./components/AppName";
import AppContainer from "./components/AppContainer";
import WelcomeMessage from "./components/WelcomeMessage"; // Fixed typo in component name
import TodoItemsContextProvider from "./store/todo-items-store";
function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AppContainer />
        <WelcomeMessage />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
