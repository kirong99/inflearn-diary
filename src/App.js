import { useState,useRef } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

function App() {

  const [data,setDate] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author,content,emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    }
    dataId.current += 1;
    setDate([newItem , ...data])
  }

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setDate(newDiaryList)
  }


  return (
    <div className='App'>
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onDelete={onDelete} diaryList = {data} />
    </div>
  )
}

export default App;
