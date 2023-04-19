import React from 'react';
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
const CreateTask = ({modal, toggle, save}) => {

    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [fechaInicio, setFechaInicio] = useState(new Date());
    const [fechaFin, setfechaFin] = useState(new Date());
    const [estado, setEstado] = useState(false);
    const [nombre, setNombre] = useState('')

    const handleChange = (e) => {
        const {name, value} = e.target

        switch (name) {
            case "taskName":
                setTaskName(value)
                break;
        
            case "description":
                setDescription(value)
                break;
            case "fechaInicio":
                setFechaInicio(value)
                break;
            case "fechaFin":
                setfechaFin(value)
                break;
            case "estado":
                setEstado(value)
                break;
            case "nombre":
                setNombre(value)
                break;
            default:
                break;
        }
    }

    const handleSave = (err, value) => {
        let taskObj = {}
        taskObj["TaskName"] = taskName;
        taskObj["Description"] = description;
        taskObj["FechaInicio"] = fechaInicio;
        taskObj["FechaFin"] = fechaFin;
        taskObj["Estado"] = estado;
        taskObj["Nombre"] = nombre;
        save(taskObj);
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="">Tarea</label>
                        <input type="text" name="taskName" id="" className='form-control' value={taskName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <textarea name="description" id="" cols="30" rows="5" className='form-control' value={description} onChange={handleChange}></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Fecha Inicio</label>
                        <input type="date" name='fechaInicio' className='form-control' value={fechaInicio} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Fecha Cierre</label>
                        <input type="date" name='fechaFin' className='form-control' value={fechaFin} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Estado</label>
                        <input type="checkbox" name='estado' className='checkbox'value={estado} onChange={handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Nombre y apellido</label>
                        <input type="text" name='nombre' className='form-control' value={nombre} onChange={handleChange}/>
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Create</Button>
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTask;