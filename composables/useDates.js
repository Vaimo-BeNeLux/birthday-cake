export const sortPeopleByBirthday = (users) => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;  // JavaScript months are 0-11
    const currentDay = currentDate.getDate();

    users.sort((a, b) => {
      // Function to calculate the days difference from current date to user's birthday
      const daysDifference = (user) => {
        if (user.bm > currentMonth || (user.bm === currentMonth && user.bd >= currentDay)) {
          return (user.bm - currentMonth) * 31 + user.bd - currentDay; // Assuming max 31 days in a month
        } else {
          // For birthdays next year
          return (12 - currentMonth + user.bm) * 31 + user.bd - currentDay; // Assuming max 31 days in a month
        }
      };

      return daysDifference(a) - daysDifference(b);
    });

    return users;
}

export const monthName = (month, long = false) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthsLong = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return long ? monthsLong[month - 1] : months[month - 1];
}
