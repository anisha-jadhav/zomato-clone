import React from 'react'
import { useParams } from 'react-router-dom';

//layout
import HomePageLayout from '../layouts/HomePage.layout'

// components 
import Delivery from '../components/Delivery'
import Dining from "../components/Dining";
import NightLife from "../components/NightLife";
import Nutrition from "../components/Nutrition";

const HomePage = () => {

  const { type } = useParams()
  
  return (
    <>
      <div className="my-5 mb-20 md:mb-10">
        {type === "delivery" && <Delivery/>}
        {type === "dining" && <Dining/>}
        {type === "night" && <NightLife/>}
        {type === "nutri" && <Nutrition/>}
      </div>
    </>
  );
}

export default HomePageLayout(HomePage)