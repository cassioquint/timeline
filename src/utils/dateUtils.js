/**
 * Returns an array of month labels with the number of days they span.
 * @param {string} startDate - Start date in ISO format.
 * @param {string} endDate - End date in ISO format.
 * @returns {Array<{ label: string, span: number }> }
 */
export function getMonthLabels(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const labels = [];
    const current = new Date(start.getFullYear(), start.getMonth(), 1);

    while (current <= end) {
        const year = current.getFullYear();
        const month = current.getMonth();

        const label = current.toLocaleString("en-US", {
            month: "short",
            year: "numeric"
        });

        const monthStart = new Date(year, month, 1);
        const monthEnd = new Date(year, month + 1, 0);

        const span = monthEnd.getDate();

        labels.push({ label, span });
        current.setMonth(current.getMonth() + 1);
    }

    return labels;
}

/**
 * Calculates the number of days between the reference date and the given date.
 * @param {string} date - The date to get the column index for.
 * @param {string} firstDate - The start date of the timeline.
 * @returns {number} - The column index based on days.
 */
export function getColumnIndex(date, firstDate) {
    console.log(date)
    const d1 = new Date(firstDate);
    const d2 = new Date(date);
    const diffTime = d2.getTime() - d1.getTime();
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
}