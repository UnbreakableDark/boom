export  function handlerTime(time){
    //处理Date时间对象的问题
    let year=time.getFullYear();
    let month=time.getMonth();//0-11
    let date=time.getDate();
    let hour=time.getHours();
    let minute=time.getMinutes();
    let second=time.getSeconds();
    let day=weakday(time.getDay());//周几  0-6  周天-周六

    return `${year} ${month+1} ${date} (${day}) : ${hour} : ${minute}`
}

function weakday(day){
    switch(day){
        case 0 : return "星期日"; 
        case 1 : return "星期一"; 
        case 2 : return "星期二"; 
        case 3 : return "星期三"; 
        case 4 : return "星期四"; 
        case 5 : return "星期五"; 
        case 6 : return "星期六"; 
        default: return alert("error 无法计算星期");
    }
}