import style from './Card.module.css';

function Card({ location, name, id, image, jurusan }) {


    return (

        <div className={style.card}>
            <div className={style.card_img} style={{ backgroundImage: `URL('${image}')` }}>
                {location && <div className={style.card_loc}>{location}</div>}
            </div>
            <div className={style.card_body}>
                <p className={style.card_title}>{name}</p>
                <p className={style.card_desc}>{jurusan}</p>
            </div>
        </div>
    )
}

export default Card