import axios from 'axios';
import { useEffect, useState } from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import News from './Pages/News';
import Bookmark from './Pages/Bookmark';
import Nav from './Components/Nav';
import DetailedNews from './Pages/DetailedNews';
function App() {
  const [data,setData] = useState()
  // useEffect(()=>{
  //   const fetchNews = async()=>{
  //     console.log("this is fetech news function")
  //     const res = await axios.get("https://newsapi.org/v2/everything",
  //       {
  //           params: {
  //             q: 'Apple',
  //             from: '2025-06-12',
  //             sortBy: 'popularity',
  //             apiKey: 'f634093fefcb4593a0bbd3e9ea72ee61',
  //           },
  //         })
  //     console.log(res.data)
  //   }
  //   fetchNews()
  // },[])
 
  return (
    <>
    <div className=' w-full'>
    <Nav />
    <Routes>
      <Route path='/' element={<News/>} ></Route>
      <Route path='/Bookmark' element={<Bookmark/>} ></Route>
      <Route path='/DetailedNews' element={<DetailedNews/>} ></Route>

    </Routes>
    </div>
    
    </>
  );
}

export default App;
