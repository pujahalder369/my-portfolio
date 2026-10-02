import { BrowserRouter } from "react-router-dom";
import MainRoute from "./routes/MainRoute";

const App = () => {
  return (
    <BrowserRouter>
      <MainRoute />
    </BrowserRouter>
  )
}

export default App;
