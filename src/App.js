import './App.scss';
import 'boxicons/css/boxicons.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Blank from './pages/Blank';
import Home from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path='/stack' element={<Blank />} />
                    <Route path='/bookmarks' element={<Blank />} />
                    <Route path='/photos' element={<Blank />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;