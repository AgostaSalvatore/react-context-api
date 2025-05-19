import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavbar from '../components/MainNavbar'
import "bootstrap/dist/css/bootstrap.min.css"

const DefaultLayout = () => {
    return (
        <>
            <header>
                <MainNavbar />
            </header>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default DefaultLayout