import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="header">
            <img className="header-image" src={logo} alt="Лого" width={100} />
            <h1 className='header-title'>Мои задачи</h1>
            <nav>
                <Link to="/">Задачи</Link> | <Link to="/about">О приложении</Link>
            </nav>
        </header>
    )
}

export default Header;