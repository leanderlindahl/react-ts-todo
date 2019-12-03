import React from 'react';
import { Layout } from '../components/Layout';
import { NextPage } from 'next';

interface InitialProps {
  id: number;
}

interface AllProps extends InitialProps {

}
const UpdatePage: NextPage<AllProps, InitialProps> = ({ id }) => {
  return <Layout>Update Page {id}</Layout>
}

UpdatePage.getInitialProps = async ctx => {
  return {
    id: typeof ctx.query.id === 'string' ? Number(ctx.query.id) : NaN
  }
};

export default UpdatePage;