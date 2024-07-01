// eslint-disable-next-line no-unused-vars

import About from './components/DaveRouter/About';
import Footer from './components/DaveRouter/Footer';
import Header from './components/DaveRouter/Header';
import Home from './components/DaveRouter/Home';
import Missing from './components/DaveRouter/Missing';
import Nav from './components/DaveRouter/Nav';
import NewPost from './components/DaveRouter/NewPost';
import PostPage from './components/DaveRouter/PostPage';
import { Routes, Route, Navigate } from 'react-router-dom';


 


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/newpost" element={<NewPost />} />
      <Route path="/postpage" element={<PostPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/missing" element={<Missing />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
     
           
     
      
     
  )
}

export default App
