import React from 'react';
import Layout from './layout/Layout';
import { Trip } from './pages';
const App: React.FC = () => {
  return (
    <Layout>
      <Trip />
    </Layout>
  );
};

export default App;
