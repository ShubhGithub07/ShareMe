import React from 'react'
import { Routes, Route, useNavigate } from 'react';

// import Login from '../components/Login';
// import Home from '../container/Home';

import Login from './components/Login';
import Home from './container/Home';

const app = () => {
  return (
    <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/*" element={<Home />} />
    </Routes>
  )
}

export default app

// echo "# ShareMe" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/ShubhGithub07/ShareMe.git
// git push -u origin main