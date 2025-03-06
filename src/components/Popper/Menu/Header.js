import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

// Bind to help us use snake case in module.scss
const cx = classNames.bind(styles);

const Header = ({ title, handleBack }) => {
    return (
        <header className={cx('header')}>
            <button className={cx('back-btn')} onClick={handleBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
};

export default Header;
