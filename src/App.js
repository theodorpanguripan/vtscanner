import { Link } from 'react-router-dom';
import './App.css';


function App() {

  return (
    <div className="body alignCenter">
      <Link to="/scan" className='scanButton'>
        <div style={{margin: "auto"}}>Scan</div>
      </Link>
    </div>
  );
}

export default App;
