import funiroIcon from '../../assets/images/icons/FuniroIcon.svg';
import search from "../../assets/images/icons/Search.svg";
import heart from "../../assets/images/icons/Heart.svg";
import cart from "../../assets/images/icons/Cart.svg";
import person from "../../assets/images/icons/personIcon.png";
import styles from "./header.module.scss"


function Header(){
    return (
        <header>
            <img alt="logo" src={funiroIcon} style={{paddingBottom: '6px'}}/>
            <ul className={styles.nav_header}>
                <li className="clear">Товары</li>
                <li className="clear">О нас</li>
                <li className="clear">Контакты</li>
            </ul>
            <div className={styles.search}>
                <img className={styles.searchIcon} src={search} alt="searchIcon"/>
                <input className={styles.searchPlace} placeholder='Напишите название мебели'/>
            </div>
            <div className={styles.headerRight}>
                <img src={heart} alt="favorites"/>
                <img src={cart} alt="cart"/>
                <img width={21} src={person} alt="person"/>
            </div>
        </header>
    )
}

export default Header