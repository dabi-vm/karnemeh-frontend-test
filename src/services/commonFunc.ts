// formate DateTime to persian time
export const getIRTime = (date: Date) => {
  return new Date(date)
  .toLocaleDateString("fa-IR", {
    hour: "2-digit",
    minute: "2-digit",
  })
  .split("،")[1];
};

// formate DateTime to persian date
export const getIRDate = (date: Date) => {
  return new Date(date).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  });
};
