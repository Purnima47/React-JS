import { useEffect } from "react";
import { useState } from "react";
import classes from './styles.module.css';
import TodoItem from "./components/todo-item";
import TodoDetails from "./components/todo-details";
import { Skeleton } from "@mui/material";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  async function fetchListOfTodos() {
    try {
      setLoading(true);
      const apiResponse = await fetch('https://dummyjson.com/todos');
      const result = await apiResponse.json();

      console.log(result);
      if (result?.todos && result?.todos?.length > 0) {
        setTodoList(result?.todos);
        setLoading(false);
        setErrorMsg('');
      } else {
        setTodoList([]);
        setLoading(false);
        setErrorMsg('');
      }


    } catch (error) {
      console.log(error);
      setErrorMsg('some error occurred');
    }
  }

  async function fetchDetailsOfCurrentTodo(getCurrTodoId) {
    console.log(getCurrTodoId);

    try {
      const res = await fetch(`https://dummyjson.com/todos/${getCurrTodoId}`);
      const data = await res.json();
      console.log(data);

      if (data) {
        setTodoDetails(data);
        setOpenDialog(true);
      } else {
        setTodoDetails(null);
        setOpenDialog(false);
      }

    } catch (error) {
      console.log(error);

    }
  }


  useEffect(() => {
    fetchListOfTodos();
  }, []);

  if (loading) {
    return <Skeleton variant="rectangular" animation="wave" width={650} height={650} />
  }

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Simple Todo App using Material UI</h1>

      <div className={classes.todoListWrapper}>
        {
          todoList && todoList.length > 0 ?
            todoList.map((todoItem) => <TodoItem fetchDetailsOfCurrentTodo={fetchDetailsOfCurrentTodo} todo={todoItem} />) : null
        }
      </div>

      <TodoDetails
        setOpenDialog={setOpenDialog}
        openDialog={openDialog}
        todoDetails={todoDetails}
        setTodoDetails={setTodoDetails}
      />
    </div>
  );
}

export default App