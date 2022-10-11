export const countChildAge = (birth) => {
    const date = new Date();
    let years = +birth.slice(-4);
    let month = +birth.slice(3, 5);
    //let days = +birth.slice(0, 2);

    let currentYear = +date.getFullYear();
    let currentMonth = +date.getMonth() + 1;
    //let currnetDays = +date.getDate();

    let age = currentYear - years;

    if (age === 0 && month - currentMonth === 0) {
      return 1 + ' мес.'
    }

    // if (age > 0 && month - currentMonth === 0) {
    //   age = age;
    // }

    if (age === 0 && currentMonth - month > 0) {
      return currentMonth - month + ' мес.';
    }

    // if (age > 0 && currentMonth - month > 0) {
    //   age = age;
    // }

    if (age === 1 && currentMonth - month < 0) {
      return 12 - month + currentMonth + ' мес.';
    }

    if (age > 1 && currentMonth - month < 0) {
      age--;
    }

    if (age === 1) age +=' год';
    if (age === 2 ||  age === 3 || age === 4) age += ' года';
    if (age >= 5) age += ' лет';

    return age;
}
