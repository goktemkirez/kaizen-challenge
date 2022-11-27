import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routes } from "../routes";
import Home from "../pages/Home";
import PageWrapper from '../components/PageWrapper'

function App() {
  return (
    <PageWrapper>
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component}>
              <Route path={`:id`} element={route.component} />
            </Route>
          ))}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </PageWrapper>
  );
}

export default App;
