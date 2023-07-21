/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

const UpdateForm = ({id, task, updateTask}) => {

  const [title, setTitle] = useState("")
  const [detail, setDetail] = useState("")
  const [date, setDate] = useState(task.deadline)

  let update_task = () => {
    if(title == "" && detail == "" && date == ""){
      return
    }

    
    updateTask({
      title: title == "" ? task.title : title,
      detail: detail == "" ? task.detail : detail,
      deadline: date == "" ? task.deadline : date,
      id: task.id,
      done: task.done
    })
    setTitle("")
    setDetail("")
    setDate("")
  }

  return (
    <>
      <div
        className="modal fade"
        id={`${id}1`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Update task
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <form action="" onSubmit={updateTask}>
              <div className="modal-body">

                <input type="text" name="title" className="form-control fw-medium text-center" value={title} onChange={(e) => setTitle(e.target.value)} placeholder={task.title} required />
                <textarea name="detail" cols="30" rows="5" className="form-control fw-medium text-center mt-4" value={detail} onChange={(e) => setDetail(e.target.value)} placeholder={task.detail} required></textarea>
                <div className="input-group mt-4">
                  <span className="input-group-text text-bg-danger">Deadline</span>
                  <input type="date" name="deadline" className="form-control fw-medium text-center" value={date} onChange={(e) => setDate(e.target.value)} placeholder={task.deadline} required />
                </div>

              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-dismiss="modal"
                  onClick={update_task}
                >
                  update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateForm;