import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Cards from "./Templates/Cards/Cards";

declare global {
  type car = {
    id: string;
    plate: string;
    image: string;
    manufacture: string;
    model: string;
    year: number;
    rentPerDay: number;
    capacity: number;
    type: string;
    availableAt: string;
  };
}

const URL = "https://sparkling-sea-2064.fly.dev/api/cars";

function Cars() {
  const { data: carsData, isError } = useQuery("cars", async () => {
    const fetched = await axios.get(URL);
    return fetched.data.data;
  });

  const [date, setDate] = useState(new Date());

  const changeDate = (e: any) => {
    const newDate = new Date(e.target.value);
    setDate(newDate);
  };

  const [capacity, setCapacity] = useState(0);

  const changeCapacity = (e: any) => {
    const newCapacity = e.target.value;
    setCapacity(newCapacity);
  };

  const [filteredCars, setFilteredCars] = useState<car[]>([]);

  const filterHandler = () => {
    setFilteredCars([]);
    carsData?.map((value: car) => {
      let availableAt: Date = new Date(value.availableAt.slice(0, 10));
      if (availableAt < date) {
        if (value.capacity >= capacity) {
          setFilteredCars((prev) => [...prev, value]);
        }
      }
    });
  };

  if (isError) {
    return <div>Error</div>;
  } else {
    return (
      <>
        <div className="bg-slate-100 border-slate-100 border-2 ml-96 my-8 rounded-xl w-fit  drop-shadow-lg">
          <div className="flex flex-row px-16 py-2 gap-4 justify-center mb-2">
            <div className="flex flex-col ">
              <div>Tipe Driver</div>
              <select name="driver" id="driver" className="px-4">
                <option value="yes">Dengan driver</option>
                <option value="no">Tanpa driver</option>
              </select>
            </div>
            <div className="flex flex-col ">
              <div>Tanggal</div>
              <input type="date" id="available-at" onChange={changeDate} />
            </div>
            <div className="flex flex-col ">
              <div>Jam</div>
              <input
                type="time"
                id="available-jam"
                className=" border-[1px] border-gray-400"
              />
            </div>
            <div className="flex flex-col ">
              <div>Capacity</div>
              <input
                type="number"
                id="available-capacity"
                onChange={changeCapacity}
              />
            </div>
            <button
              onClick={filterHandler}
              className="w-20 bg-green-500 hover:bg-blue-500 transition-all text-white font-bold  rounded "
            >
              Filter
            </button>
          </div>
        </div>
        <ul className="flex flex-row flex-wrap gap-4 mt-8 justify-center">
          {filteredCars?.map((value: car) => {
            const availableAt: Date = new Date(value.availableAt);

            return (
              <Cards key={value.id} value={value} availableAt={availableAt} />
            );
          })}
        </ul>
      </>
    );
  }
}

export default Cars;
