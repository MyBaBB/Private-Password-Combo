// eslint-disable-next-line no-unused-vars


import MainWrapper from './components/TodoFolder/WholeTodo'; 
import Password from './components/passwordFolder/PasswordApp';
import { Routes, Route, Navigate } from 'react-router-dom';


 


function App() {
  return (
    <Routes>
      {/*<Route path="/" element={<Home />} />
       <Route path="/newpost" element={<NewPost />} />
      <Route path="/postpage" element={<PostPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/nav" element={<Nav />} />
      <Route path="/header" element={<Header />} />
      <Route path="/missing" element={<Missing />} /> */}
      <Route path="/password" element={<Password />} />
      <Route path="/todo" element={<MainWrapper />} />
         
      <Route path="/*" element={<Navigate to="/password" />} />
      
    </Routes>
     
           
     
      
     
  )
}

export default App
