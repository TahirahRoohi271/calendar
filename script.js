const prevMonthButton = document.getElementById("prevMonth");
const nextMonthButton = document.getElementById("nextMonth");
const currentMonthHeader = document.getElementById("currentMonth");
const calendarBody = document.getElementById("calendarBody");

let currentDate = new Date();

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const today = new Date();
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();

    currentMonthHeader.textContent = new Date(year, month, 1).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    });

    let dayCounter = 1;

    let calendarHTML = "";

    for (let i = 0; i < 6; i++) {
        let rowHTML = "<tr>";

        for (let j = 0; j < 7; j++) {
            if ((i === 0 && j < firstDayOfMonth.getDay()) || dayCounter > daysInMonth) {
                rowHTML += "<td></td>";
            } else {
                const cellDate = new Date(year, month, dayCounter);
                const cellClasses = cellDate.toDateString() === today.toDateString() ? "today" : "";

                rowHTML += `<td class="${cellClasses}">${dayCounter}</td>`;
                dayCounter++;
            }
        }

        rowHTML += "</tr>";
        calendarHTML += rowHTML;
    }

    calendarBody.innerHTML = calendarHTML;
}

prevMonthButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthButton.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Initial rendering
renderCalendar();
