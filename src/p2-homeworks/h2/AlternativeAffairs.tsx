import React, {ChangeEvent, useState} from "react";
import alt from './AlternativeAffairs.module.css';


type AlternativeAffairs = {
  addNewTask: (title: string) => void
}


function AlternativeAffairs(props: AlternativeAffairs) {

  const [newAffairTitle, setNewAffairTitle] = useState('');


  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewAffairTitle(event.currentTarget.value);
  }

  const onClickHandler = () => {
    props.addNewTask(newAffairTitle);
    setNewAffairTitle('');
  }


    return (
        <div className={alt.wrapper}>
            <input autoFocus={true}
                   value={newAffairTitle}
                   onChange={onChangeInputHandler}
                   className={alt.inputHw2}
            />
            <button onClick={onClickHandler}>Add</button>
        </div>
    );
}

export default AlternativeAffairs;
