import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles.css'
import { NichePage } from '../NichePage'
import { niches } from '../niches'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NichePage niche={niches.casa} />
  </StrictMode>,
)
