import React, { useContext } from 'react'
import './toggle.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import { ThemeContext } from '../../context';

const Toggle = () => {
    const theme = useContext(ThemeContext)
    const handleClick=()=>{
        theme.dispatch({type:"TOOGLE"})
    }
    
  return (
    <div className='t'>
        <WbSunnyIcon  className="t-icon" />
        <DarkModeSharpIcon className="t-icon" />
        <div className="t-button" onClick={handleClick} style={{left: theme.state.darkMode ? 0:25}}></div>
    </div>
  )
}

export default Toggle