
import React from 'react';
import { layoutWrapper } from '../../HOCs/LayoutWrapper';

function PageNotFound() {
  return (
    <>
      <main id="main">
        <section className="skills" >
          <div className="container">
            <div className="section-title">
              <h4> Back to Home</h4>
              <p>Something went wrong</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default layoutWrapper(PageNotFound);