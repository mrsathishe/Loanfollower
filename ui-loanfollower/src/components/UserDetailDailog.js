import React from "react";
import BasicButton from "./formItems/BasicButton";
import Styles from "./scss/userDetailsDailog.module.scss";
let { userDetailPopup, userDetailPopupWrapper, contentWrapper } = Styles;
const UserDetailDailog = ({ openEditDailog }) => {
    return (
        <div className={userDetailPopup}>
            <div className={userDetailPopupWrapper}>
                <div className={contentWrapper}>
                    <span>urmailid@domail.com</span>
                    <span>phone number</span>
                    <BasicButton label={'Edit'} onClick={openEditDailog}></BasicButton>
                </div>
            </div>
        </div>
    )
}

export default UserDetailDailog;
