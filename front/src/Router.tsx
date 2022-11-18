import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { ComponentViewZoom } from 'pages/ComponentViewZoom'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/zoom" />} />
      <Route path="/zoom" element={<ComponentViewZoom />} />
    </Routes>
  )
}
