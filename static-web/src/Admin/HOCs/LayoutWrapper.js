import React from 'react';

import Layout from "../Layout/Layout";

export const layoutWrapper = BaseComponent => props =>
  (
    <Layout>
      <BaseComponent
        {...props} />
    </Layout>
  );