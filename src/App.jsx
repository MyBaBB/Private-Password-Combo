// eslint-disable-next-line no-unused-vars

import About from './components/DaveRouter/About';
import Footer from './components/DaveRouter/Footer';
import Header from './components/DaveRouter/Header';
import Home from './components/DaveRouter/Home';
import Missing from './components/DaveRouter/Missing';
import Nav from './components/DaveRouter/Nav';
import NewPost from './components/DaveRouter/NewPost';
import PostPage from './components/DaveRouter/PostPage';
 import MainWrapper from './components/TodoFolder/WholeTodo'; 
//  why the css before its called? on the MainWrapper component
 import Password from './components/passwordFolder/PasswordApp';
import { Routes, Route, Navigate } from 'react-router-dom';


 


function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} />
      <Route path="/newpost" element={<NewPost />} />
      <Route path="/postpage" element={<PostPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/nav" element={<Nav />} />
      <Route path="/header" element={<Header />} />
      <Route path="/missing" element={<Missing />} /> */}
      <Route path="/password" element={<Password />} />
      <Route path="/todo" element={<MainWrapper />} />
     
      
      <Route path="/*" element={<Navigate to="/" />} />
      
    </Routes>
     
           
     
      
     
  )
}

export default App
