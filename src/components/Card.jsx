import React from 'react';
import { useState } from 'react';
import EditTask from '../modals/EditTask';

const Card = ({taskObj, index, deleteTask, updateListArray}) => {

    const [modal, setModal] = useState(false)

    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#ECF3FC"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#FEFAF1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : "#F2FAF1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#FDF1F1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#F3F0FD"
        }
    ]

    const toggle = () =>{
        setModal(!modal)
    }

    const updateTask = (obj) =>{
        updateListArray(obj, index)
    }
    const handleDelete = () => {
        deleteTask(index);
    }
    return (
        <div className="card-wrapper mr-5">
            <div className="card-top" style={{"background-color": colors[index%5].primaryColor}}></div>
            <div className="task-holder">
                <span className='card-header' style={{"background-color": colors[index%5].secondaryColor, "border-radius": "10px"}}> {taskObj.TaskName} </span>
                <p>{taskObj.Description} </p>
                <p>{taskObj.FechaInicio} </p>
                <p>{taskObj.FechaFin} </p>
                <p>{taskObj.Estado} </p>
                <p>{taskObj.Nombre} </p>
                <div style={{"position:": "absolute", "right": "20px", "bottom": "20px"}}>
                    <i className='far fa-edit mr-3 iconos' style={{"cursor": "pointer"}} onClick={() => setModal(true)}></i>
                    <i className='fas fa-trash-alt mr-3 iconos' style={{"cursor": "pointer"}} onClick={handleDelete}></i>
                </div>
            </div>
            <EditTask  modal = {modal}  toggle = {toggle} updateTask = {updateTask}  taskObj = {taskObj} />
        </div>
    );
};

export default Card;