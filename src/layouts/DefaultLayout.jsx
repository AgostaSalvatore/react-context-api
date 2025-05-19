import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavbar from '../components/MainNavbar'

const DefaultLayout = () => {
    return (
        <>
            <header>
                <MainNavbar />
            </header>
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <Outlet />
                        </div>
                        <div className="col-12 col-md-4">
                            Barra di navigazione laterale
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default DefaultLayout