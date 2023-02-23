import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { AboutMe } from './pages/AboutMe'
import { Certifications } from './pages/Certifications'
import { Curriculum } from './pages/Curriculum'
import { Portifolio } from './pages/Portifolio'
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<AboutMe />} />
        <Route path="/curriculum" element={<Curriculum />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/portifolio" element={<Portifolio />} />
      </Route>
    </Routes>
  )
}
