import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/6eab629e79274585f965fe894a43690f.jpeg?x-expires=1688616000&x-signature=gMTJcyRfWSIjKB%2FX9eEQOnyAtvk%3D"
                alt="anh"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen quang thien</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>mẹo vặt cuộc sống</span>
            </div>
        </div>
    );
}

export default AccountItem;
