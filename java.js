function TimeUpdate() {
    const time = document.getElementById("clock");
    const PmAm = document.getElementById("ampm");

    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    let amPm = hour >= 12 ? 'PM' : 'AM';

    hour = hour % 12 || 12;

    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    time.textContent = `${hour}:${minutes}:${seconds}`;
    PmAm.textContent = amPm;
}

setInterval(TimeUpdate, 1000);
TimeUpdate();
