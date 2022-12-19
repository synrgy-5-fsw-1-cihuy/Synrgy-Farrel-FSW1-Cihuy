import React from "react";

type Props = {
  value: car;
  availableAt: Date;
};

function Cards({ value, availableAt }: Props) {
  return (
    <li className="max-w-sm rounded bg-slate-100 border-slate-300 border-2 overflow-hidden shadow-lg w-[300px] h-[360px]">
      <img
        src={value.image}
        alt={`${value.manufacture} ${value.model}`}
        className="w-fit h-36"
      />

      <div className="flex flex-col px-6 py-8 place-items-start gap-2 text-sm">
        <div>{`${value.year} ${value.manufacture} ${value.model} / ${value.type}`}</div>
        <div className="font-bold">
          ${value.rentPerDay.toLocaleString("de-DE")} / Day
        </div>

        <div>Available : {availableAt.toISOString().slice(0, 10)}</div>
        <div>Capacity : {value.capacity}</div>
        <button className="bg-green-500 hover:bg-blue-500 transition-all text-white font-bold py-2 px-20 rounded mt-4 ml-2">
          Pilih Mobil
        </button>
      </div>
    </li>
  );
}

export default Cards;
