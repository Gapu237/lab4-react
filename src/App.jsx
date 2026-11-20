
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

import Layout from "./components/Layout";
import Skeleton from "./components/Skeleton";
import Home from "./pages/Home";
import People from "./pages/People";
import NotFound from "./pages/NotFound";
import SimpleForm from "./pages/SimpleForm";

// Exercise 1.1 - Lazy Loading
const PersonDetail = lazy(() =>
  import("./pages/PersonDetail")
);

export default function App() {
  return (
    <Routes>
      {/* Exercise 1.2 - React Router v7 */}
      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />

        {/* Exercise 1.2.2 - Master Detail */}
        <Route path="people" element={<People />}>
          <Route
            path=":id"
            element={
              <Suspense fallback={<Skeleton />}>
                <PersonDetail />
              </Suspense>
            }
          />
        </Route>

        {/* Exercise 1.3 - Form Validation */}
        <Route
          path="form"
          element={<SimpleForm />}
        />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
