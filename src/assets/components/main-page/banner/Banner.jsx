import s from "./Banner.module.scss";
import { NavLink } from "react-router-dom";
import img1 from './../../../img/banner/img-banner-1.png';
import img2 from './../../../img/banner/img-banner-2.png';

function Banner(props) {
   return (
      <div className={s.banner}>
         <img className={s.img1} src={img1} alt="img" />
         <img className={s.img2} src={img2} alt="img" />
         <div className={s.bannerText}>
            <span className={s.bannerType}>{props.bannerData.bannerType}</span>
            <span className={s.text}>{props.bannerData.text}</span>
         </div>
         <NavLink className={s.btn} to={props.bannerData.link}>ПОСМОТЕТЬ ВСЕ</NavLink>
      </div>
   );
}

export default Banner;