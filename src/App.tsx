import Cars from "./components/Cars/Cars";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavLink, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div id="header" className="py-4 bg-[#f1f3ff]">
          <div className="flex flex-row gap-96">
            <div id="logo" className="flex flex-row gap-4 mx-32">
              <img src="https://i.imgur.com/1ZQZ1Zu.png" alt="logo" />
              <h1 className="text-2xl font-bold">Rental Mobil BCR</h1>
            </div>
            <div
              id="navbar"
              className="flex flex-row gap-8 place-items-end ml-32"
            >
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/Cari"}>Cari</NavLink>
            </div>
          </div>
          <div id="isi">INI ISI</div>
        </div>
        <Cars />
      </QueryClientProvider>
    </>
  );
}

export default App;
