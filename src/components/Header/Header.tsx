import React from "react";
import { NavLink } from "react-router-dom";

export function Header({}) {
  return (
    <div id="header" className="py-8 bg-[#f1f3ff]">
      <div className="flex flex-row gap-96">
        <div id="logo" className="flex flex-row gap-4 mx-32">
          {/* <img src="https://i.imgur.com/1ZQZ1Zu.png" alt="logo" /> */}
          <h1 className="flex-none text-2xl font-bold">Rental Mobil BCR</h1>
        </div>
        <div
          id="navbar"
          className="flex flex-row flex-grow gap-8 place-items-end ml-72 text-lg group-hover:text-red-700"
        >
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/Cari"}>Cari</NavLink>
        </div>
      </div>
      <div
        id="isi"
        className="flex flex-col my-16 gap-8 justify-center mx-24 md:flex-row"
      >
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold mb-4">
            Sewa & Rental Mobil Terbaik <br /> di kawasan Yogyakarta
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            maiores nobis eum. Aspernatur sequi non nisi, amet nihil ipsam iste
            aliquid porro dolorum atque nemo repellendus excepturi hic iusto
            rerum?
          </p>
        </div>
        <div className="flex-none ">
          <div className="bg-[#0d28a6] h-44 relative top-20 rounded-t-2xl">
            <img
              src="https://purepng.com/public/uploads/large/purepng.com-bmw-carcarsbmw-961524670123dgp13.png"
              alt=""
              className="w-[500px] relative bottom-12 md:w-[650px] md:bottom-28"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
