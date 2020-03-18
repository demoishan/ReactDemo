import React from 'react';
import { layoutWrapper } from '../../HOCs/LayoutWrapper';
function Page1() {
  return (
    <>
      <main id="main">
        <section className="skills" >
          <div className="container">
            <div className="section-title">
              <p>Page1</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default layoutWrapper(Page1);