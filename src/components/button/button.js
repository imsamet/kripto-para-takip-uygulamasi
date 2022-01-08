import Style from './button.module.css'
import cn from 'classnames'

export default function Button ({color, light, children, ...props}) {

    return(
        <button className={cn(Style.button, color === "red" ? Style.red : color === "green" ? Style.green : color === "blue" && Style.blue,  light && Style.light)} {...props}>
            {children}
        </button>
    )
}