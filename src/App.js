import Header from "./components/Header";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { Task } from "./components/Task";
import AddTask from "./components/AddTask";
function App() {
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: "1",
      text: "hi",
      day: "today",
      reminder: true,
    },
    {
      id: "2",
      text: "hiq",
      day: "todayq",
      reminder: false,
    },
    {
      id: "3",
      text: "new task",
      day: "todayq",
      reminder: true,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toogleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...tasks, reminder: !tasks.reminder } : task
      )
    );
  };
  const addTask =(task)=>{
const id = Math.floor(Math.random()*10000)+1;
const newTask ={id,...task}
setTasks([...tasks,newTask])

  }

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "#FFF",
            borderRadius: "12px",
            borderTopColor: "#ee14c7",
            borderColor: "#ee14c7",
            boxShadow: "1",
            width: "500px",
            height: "500px",
            padding: "10px",
          }}
        >
          <Header title="My first note pad"  onAdd={()=>setShowAdd(!showAdd)}  showAdd={showAdd}/>
     {
      showAdd &&
      <AddTask onAddTask={addTask}/>
     }     
          {tasks.length > 0 ? (
            <Task
              tasks={tasks}
              onDelete={deleteTask}
              onToogle={toogleReminder}
            />
          ) : (
            "No task found"
          )}
        </Box>
      </Grid>
    </>
  );
}

export default App;
