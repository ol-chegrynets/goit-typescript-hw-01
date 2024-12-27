enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) return true;
  else return false;
};

console.log("============ Task 5 =============");
console.log("is weekend: ", isWeekend(DayOfWeek.Monday));
console.log("is weekend: ", isWeekend(DayOfWeek.Sunday));
