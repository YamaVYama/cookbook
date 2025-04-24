import { searchMeal } from "@entities/recipe";
import { Button } from "@mantine/core";
import { useEffect, useState } from "react";

export const Test = () => {
  const [data, setData] = useState({});

  const handleButtonClick = async () => {
    setData(await searchMeal("pie"));
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div>
      <Button onClick={handleButtonClick}>Fetch</Button>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};
