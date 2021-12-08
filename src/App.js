import './style.css';
import Main from './Main';


const App = (props) => {
  return (
    <div >
      <Main checkChildren={props.checkChildren} state={props.state} />
    </div>
  );
}

export default App;
