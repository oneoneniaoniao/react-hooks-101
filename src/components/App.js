import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル </label>
          {/* クリックするとhtmlFor(for)で指定した値をidにもつ要素にフォーカスが当たるようになる */}
      <input className="form-control" id="formEventTitle"></input>
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">内容 </label>
      <textarea className="form-control" id="formEventBody"></textarea>
        </div>
        <button className="btn btn-primary">イベントを作成する</button>
        <button className="btn btn-danger">全てのイベントを削除する</button>
      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr><th>ID</th><th>タイトル</th><th>内容</th><th>削除</th></tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}

export default App;
