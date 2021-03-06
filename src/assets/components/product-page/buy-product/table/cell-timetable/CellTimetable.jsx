import s from "./CellTimetable.module.scss";


function CellTimetable(props) {
   return (
      <>
         <div className={s.flex}>
            <span className={s.text1}>пн-сб:</span>
            <span className={s.text2}>{props.cellData.mode1}</span>
         </div>
         <div className={s.flex}>
            <span className={s.text1}>вс:</span>
            <span className={s.text2}>{props.cellData.mode2}</span>
         </div>
      </>
   );
}

export default CellTimetable;