
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import AddLeave from './components/AddLeave';
import EditLeave from './components/EditLeave';
import Calender from './components/Calender';
import { AuthContextProvider } from './context/context';
import { Toaster } from 'react-hot-toast'

function App() {


  return (
    <div>
      <div>
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{
            success: {
              theme: {
                primary: '#4aee88',
              },
            },
          }}
        />
      </div>
      <AuthContextProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/add' element={<AddLeave />} />
            <Route path='/edit/:id' element={<EditLeave />} />
            <Route path='/cal' element={<Calender />} />
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </div>
  );
}

export default App;
