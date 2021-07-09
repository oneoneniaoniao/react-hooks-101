import React, {useState, useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Event from "./Event"
import reducer from "../reducers/index"

function App() {          
  const initialState = []
  const [state, dispatch] = useReducer(reducer, initialState)
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const addEvent = (e) => {
    e.preventDefault()
    dispatch({type:"CREATE_EVENT", title, body})
    setTitle("")
    setBody("")
  }

  const deleteAllEvent = (e) => {
    e.preventDefault()
    const result = window.confirm("全てのイベントを本当に削除しても良いですか？")
    if (result) dispatch({type:"DELETE_ALL_EVENTS"})
  }

  const unCreatable = title===""||body===""

  return (
    <div className="container">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル </label>
          {/* クリックするとhtmlFor(for)で指定した値をidにもつ要素にフォーカスが当たるようになる */}
      <input className="form-control" id="formEventTitle" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">内容 </label>
      <textarea className="form-control" id="formEventBody" value={body} onChange={e=>setBody(e.target.value)}></textarea>
        </div>
        <button className="btn btn-primary" onClick={addEvent} disabled={unCreatable}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={deleteAllEvent} disabled={state.length===0}>全てのイベントを削除する</button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr><th>ID</th><th>タイトル</th><th>内容</th><th>削除</th></tr>
        </thead>
        <tbody>
          {state.map((event,index) => (<Event key={index} event={event} dispatch={dispatch}/>))}
      
        </tbody>
      </table>
    </div>
  );
}

export default App;
