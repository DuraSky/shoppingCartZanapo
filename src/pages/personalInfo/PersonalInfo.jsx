import { useEffect } from "react";
import { testLoader } from "../utils/loader";

const PersonalInfo = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialTest = await testLoader();
        console.log(initialTest);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return <h1>This is personal info</h1>;
};

export default PersonalInfo;
