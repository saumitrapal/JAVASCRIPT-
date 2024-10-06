function dateMethod() {
    const currentDate = new Date();
    console.log("current date: ", currentDate);
    console.log("Date: ", currentDate.getDate());
    console.log("Month: ", currentDate.getMonth());
    console.log("Year: ", currentDate.getFullYear());
    console.log("Hours: ", currentDate.getHours())
    console.log("Minutes: ", currentDate.getMinutes());
    console.log("Second: ", currentDate.getSeconds());

    // Setting components of the date
    currentDate.setFullYear(2022);
    console.log("After setFullYear: ", currentDate);

    // Setting month to june (zero-indexed)
    currentDate.setMonth(5);
    console.log("After setMonth: ", currentDate);
    //Getting and setting time milliseconds since 1970
    currentDate.setMilliseconds(24);
    console.log("After setMilliSeconds: ", currentDate);
}
dateMethod();