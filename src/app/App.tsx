import router from "@app/routes";
import "@mantine/core/styles.css";
import { RouterProvider } from "react-router/dom";
import { MantineProvider } from "@mantine/core";

const App = () => {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

export default App;
