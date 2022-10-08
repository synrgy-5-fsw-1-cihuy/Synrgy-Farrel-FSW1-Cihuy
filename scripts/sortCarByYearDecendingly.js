function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  result.sort((a, b) => {
    // console.log("ini nilai a b");
    // console.log(a.year);
    // console.log(b.year);
    // console.log(a.year - b.year);
    return b.year - a.year;
  });
  // console.log(result);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
