export const getCurrentTime = () => {
  var d = new Date();
  return (
    d.getUTCFullYear() +
    "/" +
    (d.getUTCMonth() + 1) +
    "/" +
    d.getUTCDate() +
    " " +
    d.getUTCHours() +
    ":" +
    d.getUTCMinutes() +
    ":" +
    d.getUTCSeconds()
  );
};
