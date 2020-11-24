import React from "react";
import Clock from "./Clock";
import hw9 from './HW9.module.css';

function HW9() {
    return (
        <div className={hw9.wrap}>
            <hr/>
            <p className={hw9.title}>Homeworks 9</p>

            {/*should work (должно работать)*/}
            <Clock/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeClock/>*/}
            <hr/>
        </div>
    );
}

export default HW9;
