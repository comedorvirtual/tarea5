import './App.css';
// import TaskListComponent from './components/container/task_list';
// import GreetingStyled from './components/pure/greetingStyled';
// import Father from './components/container/father';
// import ContactListComponent from './components/container/contact_list';
// import OptionalRender from './components/pure/optionalRender';
// import SquareRender from './components/pure/squareRender';
import TaskListComponent from './components/container/task_list';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* <GreetingStyled name="Martin"></GreetingStyled> */}
      {/* </header> */}

      {/* <RegisterFormik></RegisterFormik> */}
      {/* <LoginFormik></LoginFormik> */}
      <TaskListComponent></TaskListComponent>
      {/* <ContactListComponent></ContactListComponent> */}
      {/* <Father></Father> */}
      {/* Ejemplos de Renderizado condicional */}
      {/* <OptionalRender></OptionalRender> */}
      {/* <SquareRender></SquareRender> */}
    </div>
  );
}

export default App;
