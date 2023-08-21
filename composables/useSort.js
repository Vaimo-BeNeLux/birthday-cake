export const sortPeople = (items) => {
  return items.sort((a, b) => {
    if (a.last_name < b.last_name) {
      return -1;
    }
    if (a.last_name > b.last_name) {
      return 1;
    }
    return 0;
  });
}