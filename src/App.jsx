import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Courses from './pages/Courses/Courses.jsx';
import CoursesDetails from './pages/CoursesDetails/CoursesDetails.jsx';
import Books from './pages/Books/Books.jsx';
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import NotFound from './pages/NotFound.jsx';
import Login from './pages/Login/Login.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/" element={<Courses />} />
        <Route path="/courses/:name" element={<CoursesDetails />} />
        <Route path="/books/" element={<Books />} />
        <Route path="/about/" element={<About />} />
        <Route path="/portfolio/" element={<Portfolio />} />

        {/* Auth Pages */}
        <Route  path="/login/" element={<Login />} />
        <Route  path="/signup/" element={<SignUp />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;