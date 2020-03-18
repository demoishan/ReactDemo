import React from 'react';

import Layout from "../Components/Layout/Layout";

export const layoutWrapper = BaseComponent => props =>
  (
    <Layout>
      <BaseComponent
        {...props} />
    </Layout>
  );