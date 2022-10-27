import React from 'react';
import style from './loading.module.scss';
import loadingIcon from '../static/images/loading.png';

const Loading = () => {
    return (
        <div className={style.loadingWrapper}>
            <div className={style.imgWrapper}>
                <img src={loadingIcon} alt="loading" />
            </div>
        </div>
    )
}

export default Loading;