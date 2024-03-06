const today = () => {
  let getToday = new Date();

  let year = getToday.getFullYear();
  let month = (getToday.getMonth()+1);
  let day = getToday.getDate();

  console.log(year + '年' + month + '月' + day + '日');
}

today();