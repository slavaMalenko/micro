import type { FC } from "react";
import { lazy, Suspense, useState } from "react";

import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Reset } from "styled-reset";
import { Header } from "./header";

const RemoteAppOne = lazy(() => import("remoteAppOne/App"));
const RemoteAppTwo = lazy(() => import("remoteAppTwo/App"));
const RemoteAppThree = lazy(() => import("remoteAppThree/App"));

const App: FC = () => {
  const [selectedRoute, setSelectedRoute] = useState("/remoteAppOne");
  return (
    <>
      <Reset />
      <div>Приветствую! Я host приложение!!!</div>

      <BrowserRouter>
        <Header
          selectedRoute={selectedRoute}
          setSelectedRoute={setSelectedRoute}
        />
        <Routes>
          <Route
            element={
              <Suspense fallback="Loading...">
                <ErrorBoundary
                  fallback={<div>Ошибка компиляции, не пугайся</div>}
                >
                  <RemoteAppOne />
                </ErrorBoundary>
              </Suspense>
            }
            path="/remoteAppOne"
          />
          <Route
            element={
              <Suspense fallback="Loading...">
                <ErrorBoundary
                  fallback={<div>Ошибка компиляции, не пугайся</div>}
                >
                  <RemoteAppTwo />
                </ErrorBoundary>
              </Suspense>
            }
            path="/remoteAppTwo"
          />
          <Route
            element={
              <Suspense fallback="Loading...">
                <ErrorBoundary
                  fallback={<div>Ошибка компиляции, не пугайся</div>}
                >
                  <RemoteAppThree />
                </ErrorBoundary>
              </Suspense>
            }
            path="/remoteAppThree"
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
