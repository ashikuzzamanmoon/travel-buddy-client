export const dateFormate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const day = date.getUTCDate();
  const month = date.toLocaleString("en-US", {
    month: "long",
    timeZone: "UTC",
  });
  const year = date.getUTCFullYear();

  return `${day} ${month} ${year}`;
};
