import moment from "moment";
import "moment/locale/en-in";

export const moments = (date) => {
  moment.locale();
  return moment(date);
};
