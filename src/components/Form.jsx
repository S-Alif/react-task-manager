/* eslint-disable react/prop-types */
import { useState } from "react";

const Form = ({addTask}) => {

  const [title, setTitle] = useState("")
  const [detail, setDetail] = useState("")
  const [deadline, setDeadline] = useState("")

  let create_task = (e) => {
    e.preventDefault();

    if(!title || !detail || !deadline){
      return alert("Please fill all the fields")
    }

    let newTask = {title, detail, deadline, id: Date.now(), done: false}

    addTask(newTask)

    setTitle("")
    setDetail("")
    setDeadline("")
  }


  return (
    <>
      <section className="forms bg-body-tertiary mt-5">
        <div className="container">
          <div className="form-box pt-5 pb-5">

            <form action="" className="text-center" onSubmit={create_task}>
              <input type="text" name="title" className="form-control fw-medium text-center" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task title" required />
              <textarea name="detail" cols="30" rows="5" className="form-control fw-medium text-center mt-4" value={detail} onChange={(e) => setDetail(e.target.value)} placeholder="Task details" required></textarea>
              <div className="input-group mt-4">
                <span className="input-group-text text-bg-danger">Deadline</span>
                <input type="date" name="date" value={deadline} id="date" className="form-control fw-medium text-center" onChange={(e) => setDeadline(e.target.value)} required />
              </div>
              <button type="submit" className="btn btn-lg btn-outline-success fw-bold border-2 rounded-2 mt-4">save task</button>
            </form>

          </div>
        </div>
      </section>
    </>
  );
};

export default Form;