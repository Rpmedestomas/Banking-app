import React from 'react'
import bpilogo from '../style/assets/bpilogo.png'
import menu from '../style/assets/menu.png'

function header() {
    return (
        <div>
            <div className="header">
                <div className="header-image">
                    <img src={bpilogo}/>
                </div>
                <div className="header-burger">
                    <img src={menu}/>
                </div>
            </div>   
        </div>
    )
}

export default header
