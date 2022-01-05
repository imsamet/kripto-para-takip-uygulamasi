import Style from './style.module.css'

import cn from 'classnames'
import {Logo, Moon, Sun} from '../icons'
import { useEffect, useState } from 'react'

export default function Nav () {

    useEffect(() => {
        console.log(mode)
    })

    const [mode, setMode] = useState("light")

    return(
        <nav className={Style.nav}>
            <div className={Style.container}>
                <div className={Style.logoContainer}>
                    <Logo/>
                    <span>Kripto Takip</span>
                </div>

                <div className={Style.buttonContainer}>

                    <div className={Style.button} onClick={() => { setMode(mode === "dark" ? "light" : "dark") }}>

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