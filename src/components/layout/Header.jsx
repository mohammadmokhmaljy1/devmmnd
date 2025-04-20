import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='flex items-center justify-between bg-primary text-secondary px-30 py-10'>
      <h1>Devmmnd</h1>
      <nav>
        <Link to='/'>الصفحة الرئيسية</Link>
        <Link to='/courses/'>الكورسات</Link>
        <Link to='/books/'>الكتب</Link>
        <Link to='/portfolio/'>الأعمال</Link>
        <Link to='/about/'>من أكون</Link>
      </nav>

      <Link to='/login/'>تسجيل الدخول</Link>
    </header>
  )
}

export default Header;