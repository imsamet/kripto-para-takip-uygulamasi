import Style from './nav.module.css'

import { useContext} from "react";
import { Link } from 'react-router-dom'
import ModeContext from '../../context/modeContext';
import cn from 'classnames'
import {Logo, Moon, Sun} from '../icons'

export default function Nav () {

    const {mode, changeMode} = useContext(ModeContext)

    return(
        <nav className={Style.nav}>
            <div className={Style.container}>
                <Link style={{textDecoration: "none"}} to="/">
                    <div className={Style.logoContainer}>
                        <Logo/>
                        <span>Kripto Takip</span>
                    </div>
                </Link>

                <div className={Style.buttonContainer}>

                    <div className={Style.button} onClick={() => { changeMode(mode === "dark" ? "light" : "dark") }}>

                        <div className={cn(Style.buttonContent, mode === "dark" && Style.justifyRight)}>

                            {
                                mode === "dark" ?
                                    <Moon/> :
                                    <Sun/>
                            }
                            
                        </div>

                    </div>

                </div>
            </div>
        </nav>
    )
}