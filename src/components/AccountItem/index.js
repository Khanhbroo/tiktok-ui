import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import image from '~/assets/images';

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={image.chipchip} alt="Chip" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>ChipChip</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>kgiaanek</span>
            </div>
        </div>
    );
};

export default AccountItem;
