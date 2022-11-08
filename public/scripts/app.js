class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-bt");
    this.carContainerElement = document.getElementById("cars-container");
    this.onSubmitFormFilter = document.getElementById("form_filter_submit");
    this.onSelectedBookingDate = document.getElementById("tanggal_filter");
    this.onSelectedTimeBooking = document.getElementById("jam_filter");
    this.onSelectedTotalPassenger = document.getElementById("jumlah_filter");
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
    this.onSubmitFormFilter.onclick = this.onFilteredCar;
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  onFilteredCar = async (event) => {
    this.clear();
    const bookingDatesTime =
      this.onSelectedBookingDate.value +
      "T" +
      this.onSelectedTimeBooking.value +
      ":00Z";
    const bookingDates = Date.parse(bookingDatesTime);

    const filteredCar = await Binar.listCars((data) => {
      const dateAvailable = Date.parse(data.availableAt);
      if (
        dateAvailable >= bookingDates &&
        data.capacity >= this.onSelectedTotalPassenger.value
      ) {
        return data.availableAt && data.capacity;
      }
    });
    Car.init(filteredCar);
    this.run();

    event.preventDefault();
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
