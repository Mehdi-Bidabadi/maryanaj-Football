const getWeekly = async () => {
    const res = await fetch("api/weekly");
    const result = await res.json();
}


export { getWeekly }