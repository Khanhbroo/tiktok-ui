import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

// Bind to help us use snake case in module.scss
const cx = classNames.bind(styles);

const MenuItem = ({ data, handleClick }) => {
    const classes = cx('menu-item', {
        separate: data.separate,
    });

    return (
        <Button
            className={classes}
            leftIcon={data.icon}
            to={data.to}
            onClick={handleClick}
        >
            {data.title}
        </Button>
    );
};

export default MenuItem;
