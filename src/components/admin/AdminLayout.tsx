import React from 'react'
import { Outlet } from 'react-router-dom'
import headerAdmin from './headerAdmin'
import footerAdmin from './footerAdmin'
import siderbar from './siderbar'
const AdminLayout = () => {
  return (
    <div>
        {headerAdmin()}
        <div>
            {siderbar()}
        <Outlet />
        </div>
        
        {footerAdmin()}
    </div>
  )
}

export default AdminLayout