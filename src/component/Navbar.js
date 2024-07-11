import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faBox, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from './context/user/userSlice';

const Navbar = ({ user }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { query } = router.query;
  const isMobile = window.navigator.userAgent.indexOf('Mobile') !== -1;
  const [showSearchBox, setShowSearchBox] = useState(false);
  const menuList = ['Women', 'Divided', 'Men', 'Baby', 'Kids', 'HOME', 'Sale'];
  let [width, setWidth] = useState(0);
  const onCheckEnter = (event) => {
    if (event.key === 'Enter') {
      if (event.target.value === '') {
        return router.push('/');
      }

      router.push(`?&name=${event.target.value}`); //쿼리파라미터
      // navigate(`/${category}`) //동적라우터
    }
  };

  const logout = () => {
    console.log('ddd');
    dispatch(logOut());
  };

  return (
    <>
      <div>
        {showSearchBox && (
          <div className="display-space-between mobile-search-box w-100">
            <div className="search display-space-between w-100">
              <div>
                <FontAwesomeIcon className="search-icon" icon={faSearch} />
                <input type="text" placeholder="Search Products" onKeyPress={onCheckEnter} />
              </div>
              <button className="closebtn" onClick={() => setShowSearchBox(false)}>
                &times;
              </button>
            </div>
          </div>
        )}
        <div className="side-menu" style={{ width: width }}>
          <button className="closebtn" onClick={() => setWidth(0)}>
            &times;
          </button>
          <div className="side-menu-list" id="menu-list">
            {menuList.map((menu, index) => (
              <button key={index}>{menu}</button>
            ))}
          </div>
        </div>
        {user && user.level === 'admin' && (
          <Link to="/admin/product?page=1" className="link-area">
            Admin page
          </Link>
        )}
        <div className="nav-header d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <div className="burger-menu hide">
              <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
            </div>
            {user && <div className="welcome-message">Welcome, {user.name}!</div>}
          </div>
          <div className="d-flex align-items-center ml-auto">
            {user ? (
              <>
                <div onClick={logout} className="nav-icon">
                  <FontAwesomeIcon icon={faUser} />
                  {!isMobile && <span style={{ cursor: 'pointer' }}>Logout</span>}
                </div>
              </>
            ) : (
              <div onClick={() => navigate('/login')} className="nav-icon">
                <FontAwesomeIcon icon={faUser} />
                {!isMobile && <span style={{ cursor: 'pointer' }}>Login</span>}
              </div>
            )}
            <div onClick={() => navigate('/cart')} className="nav-icon">
              <FontAwesomeIcon icon={faShoppingBag} />
              {!isMobile && <span style={{ cursor: 'pointer' }}>{`My Cart(0)`}</span>}
            </div>
            <div onClick={() => navigate('/account/purchase')} className="nav-icon">
              <FontAwesomeIcon icon={faBox} />
              {!isMobile && <span style={{ cursor: 'pointer' }}>My Order</span>}
            </div>
            {isMobile && (
              <div className="nav-icon" onClick={() => setShowSearchBox(true)}>
                <FontAwesomeIcon icon={faSearch} />
              </div>
            )}
          </div>
        </div>

        <div className="nav-logo">
          <Link to="/">
            <img width={350} src="/image/mayday_logo.png" alt="mayday_logo.png" />
          </Link>
        </div>
        <div className="nav-menu-area">
          <ul className="menu">
            {menuList.map((menu, index) => (
              <li className="menu-item" key={index} onClick={() => handleCategoryChange(menu.toLowerCase())}>
                <div>{menu}</div>
              </li>
            ))}
          </ul>
          {!isMobile && (
            <div className="search-box landing-search-box ">
              <FontAwesomeIcon icon={faSearch} />
              <input type="text" placeholder="search" onKeyPress={onCheckEnter} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
