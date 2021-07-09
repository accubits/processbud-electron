import logo from './logo.svg';
import './App.css';
import Dashboard from './screens/dashboard';
import { AuthContext } from './components/Context/context';
import { useReducer } from 'react';
const initailState = {
  properties: false,
  closeP:false
}

const reducer = (state, action) => {
  switch (action.type) {
    case "propertiesOpen":
      return {
        ...state,
        properties: true,
        closeP:false
      }

      case "propertiesCloseOpen":
        return {
          ...state,
          properties: false,
          closeP:true
        }
  
    case "propertiesClose":
      return {
        ...state,
        properties: false,
        closeP:false
      }
    default:
      return {
        ...state,
        properties: false,
        closeP:false
      }
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer,initailState)


  return (
    <AuthContext.Provider value={{ state, dispatch }} >
      <Dashboard />
    </AuthContext.Provider>
  );
}

export default App;
