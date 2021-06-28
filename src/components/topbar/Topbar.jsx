import React from 'react'
import './topbar.scss'
import news from './news.png';

function Topbar() {
    return (
        <div className='topbar'>
            <div className="wrapper">
                <div className="left">
                    <a href="#head" className='logo'><img src={news} alt="logo" /></a>
                </div>
            </div>
        </div>
    )
}

export default Topbar
