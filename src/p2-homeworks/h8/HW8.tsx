import React, {useState} from "react";
import './HW8.css';
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

const initialPeople = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);


    const finalPeople = people.map(person => (
        <div key={person._id} className='inner'>
          <p>{person.name}</p>
          <p>{person.age}</p>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort_up", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort_down", payload: "down"}))
    const sortAge = () => setPeople(homeWorkReducer(initialPeople, {type: "check_age", payload: 18}))

    return (
        <div className='box'>
            <hr/>
            <p className='title'>Homeworks 8</p>

            {/*should work (должно работать)*/}

            {finalPeople}
            <div className='wrapper-btn'>
              <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
              <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
              <div><SuperButton onClick={sortAge}>Age more than 18 year</SuperButton></div>
            </div>




            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    );
}

export default HW8;
