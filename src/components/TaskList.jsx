/* eslint-disable react/prop-types */
import { useState } from "react";

import { BsCheckLg, BsXLg, BsTrashFill, BsPencilSquare } from "react-icons/bs";

import ConfilrmDeletion from "./ConfilrmDeletion";
import UpdateForm from "./UpdateForm";

const TaskList = ({ task, deleteTask, toggleDone, toggleUndone, updateTask }) => {

  const [marked, setMarked] = useState(task.done)

  let marking = () => {
    setMarked("true")
  }

  let unMark = () => {
    setMarked("false")
  }



  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 mt-4">
        <div className={`task-content p-lg-3 p-2 rounded border border-3 ${marked == "true" ? "border-success" : ""}`}>
          <figure>
            <blockquote className="blockquote">
              <p className="fw-bold text-start text-capitalize fs-5">{task.title}</p>
            </blockquote>
            <blockquote className="blockquote">
              <p className="task-detail text-start fs-6">{task.detail}</p>
            </blockquote>
            <figcaption className="blockquote-footer text-end pt-3">
              Deadline : {task.deadline}
            </figcaption>
          </figure>

          <div className="check-btn text-end pt-3">
            <button className={`btn btn-outline-success btn-sm rounded-5 border-2 shadow me-2 ${marked == "true" ? "d-none" : ""}`} onClick={() => { toggleDone(task.id); marking() }}><BsCheckLg /></button>
            <button className={`btn btn-outline-primary btn-sm rounded-5 border-2 shadow me-2 ${marked == "true" ? "" : "d-none"}`} onClick={() => { toggleUndone(task.id); unMark() }}><BsXLg /></button>
            <button className="btn btn-outline-warning btn-sm rounded-5 border-2 shadow me-2" data-bs-toggle="modal" data-bs-target={`#${task.id}1`}><BsPencilSquare /></button>
            <button className="btn btn-outline-danger btn-sm rounded-5 border-2 shadow" data-bs-toggle="modal" data-bs-target={`#${task.id}`}><BsTrashFill /></button>
          </div>

          <ConfilrmDeletion id={`${task.id}`} deleteTask={deleteTask} modalTitle={"Confirm task deletion"} modalDetail={"Do you want to delete the task ?"} />

          <UpdateForm id={`${task.id}`} task={task} updateTask={updateTask} />
        </div>
      </div>
    </>
  );
};

export default TaskList;