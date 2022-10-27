import React, { useState } from "react";
/** import localcomponents */
import UserDetailDailog from '../components/UserDetailDailog';
/** import styles */
import { BsFillCaretDownFill } from 'react-icons/bs';

const ActionHeader = () => {
    const [isOpenUserDailog, setIsOpenUserDailog] = useState(false);
    return (
        <header className="App-header">
            <div className='wrapper'>
                <div className='left-side-content'>
                    {/** left-side contents */}
                    {/* <div className='menu'>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
            </div> */}
                    <span className='ml-10'>
                        Hi, {"Sathish"}
                    </span>
                    <span className='down_caret' onClick={() => setIsOpenUserDailog(!isOpenUserDailog)}>
                        <BsFillCaretDownFill />
                    </span>
                    {
                        isOpenUserDailog &&
                        <UserDetailDailog />
                    }
                </div>
                <div className='right-side-content'>
                    {/** right side contents */}
                    <a href='#'>Logout</a>
                </div>
            </div>
        </header>
    )
};

export default ActionHeader;