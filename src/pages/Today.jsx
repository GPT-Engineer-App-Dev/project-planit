import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const TodayPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ name: "", dueDate: "" });

  const addTask = () => {
    setTasks([...tasks, { ...newTask, completed: false }]);
    setNewTask({ name: "", dueDate: "" });
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Today</h1>
      <ul className="mb-4">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center mb-2">
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => toggleTaskCompletion(index)}
              className="mr-2"
            />
            <span className={task.completed ? "line-through" : ""}>{task.name}</span>
          </li>
        ))}
      </ul>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Task</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Task</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="taskName">Task Name</Label>
              <Input
                id="taskName"
                value={newTask.name}
                onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="dueDate">Due Date</Label>
              <Input
                id="dueDate"
                type="date"
                value={newTask.dueDate}
                onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
              />
            </div>
            <Button onClick={addTask}>Save</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TodayPage;