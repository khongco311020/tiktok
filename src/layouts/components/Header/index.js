import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faCoins,
    faUser,
    faGear,
    faBookmark,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
//HeadlessTippy
//Tippy
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import config from '~/config';
import Button from '~/componets/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/componets/Popper/Menu';
import { InboxIcon, MessagesIcon } from '~/componets/Icons';
import Image from '~/componets/Image';
import Search from '../Search';

const cx = classNames.bind(styles);
const currentUser = true;
// Menu phần chưa đăng nhập
const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'Japan',
                    title: '日本語',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

// menu phần đã đăng nhập
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/View',
    },
    {
        icon: <FontAwesomeIcon icon={faBookmark} />,
        title: 'Favorite',
        to: '/Favorite',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coin',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/Settings',
    },
    ...MENU_ITEM,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // handle change language
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* logo */}
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="logo tiktok" />
                </Link>
                {/* Search */}
                <Search />
                {/* action */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button className={cx('upload-icon')} text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>

                            <Tippy delay={[0, 100]} content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessagesIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 100]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button className={cx('upload-icon')} text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                            {/*  */}
                        </>
                    )}
                    <Menu item={currentUser ? userMenu : MENU_ITEM} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://images.unsplash.com/photo-1690148887417-91e785699000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                                alt="Nguyễn Thiện"
                                // fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
