import {StrictMode, useEffect} from 'react'
import { createRoot } from 'react-dom/client'

//Fonts
import '@fontsource/roboto/400.css'; // обычный
import '@fontsource/roboto/500.css'; // medium
import '@fontsource/roboto/700.css'; // bold

import '@fontsource-variable/montserrat';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'normalize.css'
import './index.scss'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
