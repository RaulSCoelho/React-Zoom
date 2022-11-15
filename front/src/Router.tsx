import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { Zoom } from 'pages/Zoom'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/zoom" />} />
      <Route path="/zoom" element={<Zoom />} />
    </Routes>
  )
}
