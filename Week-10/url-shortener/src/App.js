import logo from './logo.svg';
import { InputBox } from './components/InputBox';
import { Logo } from './components/logo';
import { useEffect, useState } from 'react';
import './App.css';
import { HistoryBox } from './components/HistoryBox';
import { HistoryModal } from './components/HistoryModal';

function App() {
  const [urlList,setUrlList] = useState([]);
  const [showModal,setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  }
  const closeModal = () => {
    setShowModal(false);
  }
  console.log("urllist",urlList)
  useEffect(()=>{
    let list = JSON.parse(localStorage.getItem("urlList"));
    if(!list || list?.length === 0)
    {
      list = [];
    }
    setUrlList(list);
    window.addEventListener("keydown",(event)=>{
        if(event.key === "Escape")
        {
          closeModal();
        }
    })
  },[]);
  return (
    <div className="App">
      <HistoryModal urlList={urlList} showModal={showModal} closeModal={closeModal}/>
    <div className='header'>
      <Logo/>
      <HistoryBox openModal={openModal}/>
    </div>  
    <InputBox urlList={urlList} setUrlList={setUrlList}/>
    </div>
  );
}

export default App;
