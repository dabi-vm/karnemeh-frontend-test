export const getIRTime = (date: Date) => {
  return new Date(date)
    .toLocaleDateString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    })
    .split("،")[1];
};

export const getIRDate = (date: Date) => {
  return new Date(date).toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  });
};
