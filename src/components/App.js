import React, {useReducer, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import EventForm from "./EventForm"
import AppContext from "../contexts/AppContext"
import reducer from "../reducers"
import Events from "./Events"
import OperationLogs from "./OperationLogs"

const APP_KEY = "appWithRedux"
function App() {     
  const appState = localStorage.getItem(APP_KEY)     
  const initialState = appState ? JSON.parse(appState): { 
    events: [], 
    operationLogs: []
  }
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(()=>{
    localStorage.setItem(APP_KEY, JSON.stringify(state))
  },[state])
  return (
    <AppContext.Provider value={{state, dispatch}}>
    <div className="container">
 <EventForm />
 <Events />
 <OperationLogs />
    </div>
    </AppContext.Provider>
  );
}

export default App;
