import React, {useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const increment = ()=>setCount(count+1)
  const multipleOfThree = ()=>setCount(previousCount=>{
    return previousCount%3 === 0 ? previousCount/3 : previousCount
  })
  
  return (
    <>
    <div>Count: {count}</div>
    <button onClick={increment}>+1</button>
    <button onClick={()=>setCount(previousCount=>previousCount-1)}>-1</button>
    <button onClick={()=>setCount(previousCount=>previousCount*2)}>x2</button>
    <div>
    <button onClick={multipleOfThree}>3の倍数の時だけ3で割るボタン</button>
    </div>
    <div>
    <button onClick={()=>setCount(0)}>reset</button>
    </div>
    </>
  );
}

export default App;
