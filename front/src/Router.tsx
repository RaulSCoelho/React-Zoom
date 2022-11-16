import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { ClientViewZoom } from 'pages/ClientViewZoom'
import { ComponentViewZoom } from 'pages/ComponentViewZoom'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/zoom" />} />
      <Route path="/component-view-zoom" element={<ComponentViewZoom />} />
      <Route path="/zoom" element={<ClientViewZoom />} />
    </Routes>
  )
}
