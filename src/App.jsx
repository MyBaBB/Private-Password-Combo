// eslint-disable-next-line no-unused-vars


import MainWrapper from './components/TodoFolder/WholeTodo'; 
import Password from './components/passwordFolder/PasswordApp';
import { Routes, Route, Navigate  } from 'react-router-dom';


 


function App() {
  return (
   
    <Routes>
      <Route path="/password" element={<Password />} />
      <Route path="/todo" element={<MainWrapper />} />
      <Route path="/*" element={<Navigate to="/todo" />} />
      
    </Routes>
     
           
     
      
     
  )
}

export default App
