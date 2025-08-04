import React from 'react'
import Courselist from './CourseList'
import CoursesGrid  from './CoursesGrid'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import ThemeController from './ThemeController'

export default function Navbar({courses}){
    return(
        <>
            <Router>
                <div className="navbar bg-base-100 shadow-sm mb-10">
                    <div className="flex-1">
                        <Link to='/' className="btn btn-ghost text-xl">Ngombe</Link>
                    </div>
                    <div className="flex gap-2">
                        <ul className="menu menu-vertical lg:menu-horizontal">
                            <li><Link to='/Courselist' className="link">Courselist</Link></li>
                        </ul>
                        <div className="content-centergrid content-center">
                            <ThemeController />
                        </div>
                        <div className="flex flex-col lg:flex-row">
                            <div className="divider lg:divider-horizontal"></div>
                        </div>
                        <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <Routes>
                    <Route path='/' element={<CoursesGrid courses={courses}/>}></Route>
                    <Route path='/courselist' element={<Courselist/>}></Route>
                </Routes>
            </Router>
        </>
    )
}