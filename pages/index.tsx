import React from 'react';
import { render } from 'react-dom';

interface Task {
  title: string;
}

interface TasksListProps {
  initialTasks: Task[];
}
interface TasksListState {
  tasks: Task[];
}

class TasksList extends React.Component<TasksListProps, TasksListState> {
  constructor(props: TasksListProps) {
    super(props);
    this.state = {
      tasks: props.initialTasks
    };
    this.onAddNewTaskClick = this.onAddNewTaskClick.bind(this);
  }

  onAddNewTaskClick() {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          title: 'New Task'
        }
      ]
    });
  }

  render() {
    const { tasks } = this.state;
    return (
      <ul>
        {tasks.map((task, i) => {
          return <li key={i}>{task.title}</li>;
        })}
        <button onClick={this.onAddNewTaskClick}>Add new task</button>
      </ul>
    );
  }
}

const tasks: Task[] = [
  { title: 'Task One' },
  { title: 'Task Two' },
  { title: 'Task Three' }
];

export default () => (
  <div>
    <TasksList initialTasks={tasks} />
  </div>
);
