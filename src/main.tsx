import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { GeneralPage } from './GeneralPage'
import { initClarity, initPixel } from './tracking'

initPixel()
initClarity()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GeneralPage />
  </StrictMode>,
)
