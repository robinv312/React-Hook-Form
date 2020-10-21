import React from 'react';

let list = ["a","b"];
const buttonAddHandler = (e) => {
  alert(list)

}
const txtChange = (e) => {
    list.push(e.target.value);
    
}
const buttonDeleteHandler = () => {

}

const Demo = () => {

    return (
        <div className="">
            <input type="text" onChange={txtChange}/>
            <button onClick={buttonAddHandler}>Add</button>
            <ul>
                {list.map((itm, key) => {
                    return (
                        <li>{itm} <button>Delete</button></li>);
                })}
            </ul>
        </div>
    );
}
export default Demo;