import React from 'react';
import { NextPage } from 'next';
import { TasksComponent, TaskStatus } from '../generated/graphql';
import { Layout } from '../components/Layout';
import TaskList from '../components/TaskList';
import CreateTaskForm from '../components/CreateTaskForm';

interface InitialProps {
  greeting: string;
}

interface Props extends InitialProps {}

const IndexPage: NextPage<Props, InitialProps> = (props) => {
  return <Layout>
    <TasksComponent variables={{status: TaskStatus.Active}}>{({loading, error, data, refetch}) => {
    if (loading) {
      return <p>Loading.</p>
    } else if (error) {
      return <p>An error occured. {console.log(error)}</p>
    }
    const tasks = data && data.tasks ? data.tasks : [];
    return (
      <>
        <CreateTaskForm onTaskCreated={refetch} />
        <TaskList tasks={tasks} />
      </>
    );
    }}</TasksComponent>
  </Layout>
}

IndexPage.getInitialProps = async () => ({
  greeting: 'Hello World!'
});

export default IndexPage;