import { useEffect } from "react";
import { testLoader } from "../utils/loader";
import Recap from "../recap/Recap";

const PersonalInfo = () => {
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const initialCart = await testLoader();
  //       console.log("test loader:", initialCart);
  //     } catch (error) {
  //       console.error("Error in fetchData:", error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <h1>This is shipping</h1>
      <Recap />
    </>
  );
};

export default PersonalInfo;
