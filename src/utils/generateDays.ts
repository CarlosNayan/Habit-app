import dayjs from "dayjs";

export function generateDates() {
  const firstDate = dayjs("2023-12-24T03:00:00.000");
  const today = dayjs();

  const dates = [];
  let compareDate = firstDate;

  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate());
    compareDate = compareDate.add(1, "day");
  }

  return dates;
}
