function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (const ele of cars) {
    if (ele.available === true) {
      result.push(ele);
    } else {
      continue;
    }
    // console.log(ele.available);
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
