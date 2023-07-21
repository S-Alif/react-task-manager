/* eslint-disable react/prop-types */
import ConfilrmDeletion from "./ConfilrmDeletion";
import TaskList from "./TaskList";


const ShowTask = ({ task, deleteTask, clearList, toggleDone, toggleUndone, updateTask }) => {

  let taskList = task



  return (
    <>
      <section className="show-task pt-5 pb-5">
        <div className="container">

          {
            taskList.length > 0 && (<h4 className="mb-5 text-dark-emphasis text-uppercase text-center">Your todos</h4>)
          }
          {
            taskList.length == 0 && (<blockquote className="blockquote text-center">
              <p>Your tasks will be shown here</p>
            </blockquote>)
          }

          <div className="row">
            {
              taskList.map((e, index) => (
                <TaskList key={index} task={e} deleteTask={deleteTask} toggleDone={toggleDone} toggleUndone={toggleUndone} updateTask={updateTask} />
              ))
            }
          </div>

          {
            taskList.length > 0 && (
              <div className="clear-list text-center mt-5 pt-3 mb-5">
                <button className="btn btn-outline-danger btn-lg fw-bold text-capitalize rounded-2 border-2" data-bs-toggle="modal" data-bs-target="#listClear">clear tasks</button>

                <ConfilrmDeletion id={"listClear"} deleteTask={clearList} modalTitle={"Confirm task list deletion"} modalDetail={"Do you want to delete the task list ?"} />
              </div>
            )
          }
        </div>
      </section>
    </>
  );
};

export default ShowTask;