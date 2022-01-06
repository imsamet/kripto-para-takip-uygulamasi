import Style from './new.module.css'

export default function New ({index, head, paragraph, date, image, url}) {
    return(
        <div className={Style.container}>

            <div className={Style.spanContainer}>
                <span className={Style.number}>{index}</span>
            </div>

            <div>

                <div className={Style.headLimit}>
                    <a href={url} className={Style.head}>{head}</a>
                </div>
                
                <div className={Style.paragraphLimit}>
                    <p className={Style.paragraph}>{paragraph}</p>
                </div>
                
                <span className={Style.date}>{date}</span>
            </div>

            <div className={Style.imageContainer}>
                <img className={Style.image} src={image}></img>
            </div>

        </div>
    )
}