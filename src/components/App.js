import React, {useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import EventForm from "./EventForm"
import AppContext from "../contexts/AppContext"
import reducer from "../reducers/index"
import Events from "./Events"

console.log({AppContext})
function App() {          
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <AppContext.Provider value={"Im a Provider."}>
    <div className="container">
 <EventForm state={state} dispatch={dispatch}/>
 <Events state={state} dispatch={dispatch}/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
