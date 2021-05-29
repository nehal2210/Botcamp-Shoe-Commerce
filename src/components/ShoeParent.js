import React from 'react'
import {Outlet} from 'react-router-dom'
export default function ShoeParent() {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    )
}
