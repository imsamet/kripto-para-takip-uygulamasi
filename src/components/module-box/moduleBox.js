import { useRef } from 'react'
import Style from './moduleBox.module.css'

export default function ModuleBox ({title, text, closeFunction, children}) {

    const containerRef = useRef()

    const handleClick = (e) => {

        containerRef.current === e.target && //sadece container'a tıklandığında kapanmasını sağlıyor
            closeFunction(false)
    }

    return (
        <div className={Style.container} onClick={handleClick} ref={containerRef}>

            <div className={Style.content}>

                <div className={Style.head}>

                    <h1>{title}</h1>
                    {text && <span>{text}</span>}

                </div>
                    
                {children}

            </div>

        </div>
    )
}