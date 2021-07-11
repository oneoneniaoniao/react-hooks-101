import React, {useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import EventForm from "./EventForm"
import reducer from "../reducers/index"
import Events from "./Events"

function App() {          
  const [state, dispatch] = useReducer(reducer, [])

  return (
    <div className="container">
 <EventForm state={state} dispatch={dispatch}/>
 <Events state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
