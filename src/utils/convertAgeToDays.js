export const convertAgeToDays = (birth) => {
    const date = new Date();
    let years = date.getFullYear() - birth.slice(-4);
    let month = +birth.slice(3, 5);
    let days = +birth.slice(0, 2);
  
  
    let monthDaysBirth = days + month*30;
    let monthDaysCurrent = +date.getDate() + (+date.getMonth() + 1)*30;
  
    if (monthDaysCurrent === monthDaysBirth && years > 0) {
        return years*365;
    }
  
    if (years === 0) {
        return monthDaysBirth;
    }
  
    if (years > 0 && monthDaysBirth < monthDaysCurrent) {
        return (monthDaysCurrent - monthDaysBirth) + years*365;
    }
  
    if (years > 0 && monthDaysBirth > monthDaysCurrent) {
        return monthDaysCurrent + (years - 1)*365
    }
  }
  