function displayTime() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    const amOrPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    const timeOfDay = hours >= 6 && hours < 18 ? "day" : "night";
  
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    const hourEl = document.getElementById("hour");
    const minuteEl = document.getElementById("minute");
    const secondEl = document.getElementById("second");
  
    hourEl.innerHTML = hours;
    minuteEl.innerHTML = minutes;
    secondEl.innerHTML = seconds;
  
    document.documentElement.setAttribute("data-time-of-day", timeOfDay);
    document.documentElement.setAttribute("data-am-pm", amOrPm);
  }
  
  setInterval(displayTime, 1000);
  