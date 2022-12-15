import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

type car = {
  plate: string;
  image: string;
  manufacture: string;
  model: string;
  year: number;
  rentPerDay: number;
  capacity: number;
  type: string;
  availableAt: any;
};

function Cars() {
  const { data: carsData, isError } = useQuery("cars", async () => {
    const fetched = await axios.get(
      "https://sparkling-sea-2064.fly.dev/api/cars"
    );

    return fetched.data.data;
  });

  const [date, setDate] = useState(new Date());

  const changeDate = (e: any) => {
    const newDate = new Date(e.target.value);
    setDate(newDate);
    // console.log(date);
    // console.log(typeof date);
  };

  const filteredCars: any = [];

  carsData?.map((value: car) => {
    let availableAt: Date = new Date(value.availableAt.slice(0, 10));
    // console.log(
    //   `${value.model} --> ${availableAt
    //     .toISOString()
    //     .slice(0, 10)} \npicked date: ${date.toISOString().slice(0, 10)}\n
    //      ${availableAt.getDate()} < ${date.getTime()} --> ${availableAt < date}
    //     `
    // );
    console.log(date);
    if (availableAt < date) {
      filteredCars.push(value);
    }
  });

  return (
    <>
      <div className="bg-slate-400 mx-60 my-8 rounded-xl">
        <div className="flex flex-row px-60 py-2 gap-4 justify-center  ">
          <select name="driver" id="driver">
            <option value="yes">Dengan driver</option>
            <option value="no">Tanpa driver</option>
          </select>

          <input
            type="date"
            name=""
            id="available-at"
            // value={date}
            onChange={changeDate}
          />
          <input type="time" name="" id="" />
        </div>
      </div>
      <ul className="flex flex-row flex-wrap gap-4 mt-8 justify-center">
        {filteredCars?.map((value: car) => {
          const availableAt: Date = new Date(value.availableAt);

          // console.log(availableAt>date);
          // console.log(value.availableAt);

          return (
            <li
              key={value.plate}
              className="max-w-sm rounded bg-[#4a4a4a] overflow-hidden shadow-lg w-[300px] h-[360px]"
            >
              <img
                src={value.image}
                alt={`${value.manufacture} ${value.model}`}
                className="w-fit h-36"
              />

              <div className="flex flex-col px-6 py-8 place-items-start gap-2 text-sm">
                <div>{`${value.year} ${value.manufacture} ${value.model} / ${value.type}`}</div>
                <div className="font-extrabold">
                  ${value.rentPerDay.toLocaleString("de-DE")} / Day
                </div>

                <div>Available : {availableAt.toISOString().slice(0, 10)}</div>
                {/* {console.log(value.availableAt)        } */}
                {/* {console.log(new Date(value.availableAt).toDateString())} */}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Cars;
