import './App.css'
import Book from "./pages/bookPage/Book.jsx";
import Home from "./pages/homePage/Home.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import Register from "./pages/registerPage/Register.jsx";
import Login from "./pages/loginPage/Login.jsx";
import NotFound from "./pages/notFoundPage/NotFound.jsx";
import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <>
            <Navigation />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/books" element={<Book />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </>
    )
}

export default App
