import { useState } from 'react'
import {
  BrowserRouter, Routes, Route, Link, NavLink,
} from 'react-router-dom';
import { Icon } from '@iconify/react'
import './App.css'

import Dashboard from './routes/Dashboard';

const navigationFileMenuItem = [
  { icon: "ci:file-new", name: "New", function: "Bruh" },
  { icon: "material-symbols:upload-rounded", name: "Upload File", function: "Bruh" }
]

function Navigation() {
  return (
    <div className="navbar bg-transparent">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-2xl gap-x-2">
          <Icon icon="material-symbols:terminal-rounded" className='text-xl' />
          WebIDE
        </a>
      </div>
      <div className="dropdown dropdown-end dropdown-hover">
        <label tabIndex={0} className="btn m-1 gap-x-2 text-xl">
          <Icon icon="mdi:file"/>
          File
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52">
          {navigationFileMenuItem.map((item) => (
            <li>
              <div>
                <Icon icon={item.icon} className='text-xl text-primary' />
                <a>{item.name}</a>
              </div>

            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter data-theme="night" className="bg-background">
    <Navigation />
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>

  )
}

export default App
