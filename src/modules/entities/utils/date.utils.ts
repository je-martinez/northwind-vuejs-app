import dayjs from "dayjs";

const formatDate = (date: Date, format = "YYYY-MM-DD"): string => {
  return dayjs(date).format(format);
};

export { formatDate };
