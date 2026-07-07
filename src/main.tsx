import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { GeneralPage } from './GeneralPage'
import { initPixel } from './tracking'

initPixel()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GeneralPage />
  </StrictMode>,
)
