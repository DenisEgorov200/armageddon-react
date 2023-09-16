export const formatDistance = (distance) => {
  return Math.round(distance)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};
