// takes a Date object as an argument and returns a string representation of the date and time
function dateFormat(Date) {
  const dateString = Date.toLocaleString();
  return dateString;
};

module.exports = dateFormat;
