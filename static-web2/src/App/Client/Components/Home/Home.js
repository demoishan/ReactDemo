import React from 'react';
import Slider from "../../Layout/Slider/Slider"
import SubPage from "../../Components/SubPage/SubPage"
import { layoutWrapper } from '../../HOCs/LayoutWrapper';

function Home() {
  return (
    <>
      <Slider />
      <SubPage />
    </>
  );
}

export default layoutWrapper(Home);