setInterval(() => {
   let a = new Date();
   let todayDate = a.toLocaleDateString();
   //console.log(todayDate);
    // let Date=a.toLocaleDateString();
 let time = a.getHours()+':'+ a.getMinutes()+':'+a.getSeconds();
  let timeHtml = document.getElementById('time');
  document.getElementById('time').innerHTML=time+ "<br>ON Date:"+todayDate;
  //timeHtml.innerHTML = time;
  //console.log('tme '+time);
}, 1000);
