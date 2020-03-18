import React from 'react';

import ClientRoute from "./Client/ClientRoute"
import AdminRoute from "./Admin/AdminRoute"

function App() {
  return (
    <>
        <ClientRoute />
        <AdminRoute />
    </>
  );
}

export default App;