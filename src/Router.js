import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { AboutMe } from './pages/AboutMe'
import { Curriculum } from './pages/Curriculum'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<AboutMe />} />
        <Route path="/curriculum" element={<Curriculum />} />
      </Route>
    </Routes>
  )
}
