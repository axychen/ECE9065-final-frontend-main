import './App.css';
import MainPage from './pages/mainPage';
import { Routes, RouterProvider } from 'react-router-dom';
import router from './router/router';
//this is dev branch
function App() {
  
  return (
    <div className="App">
      {/* <MainPage></MainPage> */}
      <RouterProvider router = {router}></RouterProvider>
    </div>
    
  );
}

export default App;
