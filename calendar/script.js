document.addEventListener("DOMContentLoaded", function () {
  const calendarElement = document.getElementById("calendar");

  function createCalendar(year, month) {
    const date = new Date(year, month);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const startDay = new Date(year, month, 1).getDay();

    const calendarHeader = document.createElement("div");
    calendarHeader.className = "calendar-header";
    calendarHeader.innerHTML = `
            <button id="prevMonth">Prev</button>
            <div>${date.toLocaleString("default", {
              month: "long",
            })} ${year}</div>
            <button id="nextMonth">Next</button>
        `;

    const calendarBody = document.createElement("div");
    calendarBody.className = "calendar-body";

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let day of daysOfWeek) {
      const dayElement = document.createElement("div");
      dayElement.className = "day day-name";
      dayElement.innerText = day;
      calendarBody.appendChild(dayElement);
    }

    for (let i = 0; i < startDay; i++) {
      const emptyCell = document.createElement("div");
      emptyCell.className = "day";
      calendarBody.appendChild(emptyCell);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const dayElement = document.createElement("div");
      dayElement.className = "day";
      dayElement.innerText = i;
      calendarBody.appendChild(dayElement);
    }

    calendarElement.innerHTML = "";
    calendarElement.appendChild(calendarHeader);
    calendarElement.appendChild(calendarBody);

    document.getElementById("prevMonth").addEventListener("click", () => {
      createCalendar(year, month - 1);
    });

    document.getElementById("nextMonth").addEventListener("click", () => {
      createCalendar(year, month + 1);
    });
  }

  const today = new Date();
  createCalendar(today.getFullYear(), today.getMonth());
});
