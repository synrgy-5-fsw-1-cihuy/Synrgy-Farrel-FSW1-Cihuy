import { Header } from "./components/Header/Header";
import Cars from "./components/Cars/Cars";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
// import logo from "./assets/logo.svg";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div className="text-center mt-16">
                <h1 className=" font-semibold text-4xl">
                  Anggep aja ini Home Page 🙂
                </h1>
                <p className="text-xs">
                  Sorry mas belom kelar slicing home page....
                </p>
              </div>
            }
          />
          <Route path="/Cari" element={<Cars />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
