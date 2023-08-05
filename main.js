const day = document.getElementById('Day')
const month = document.getElementById('Month')
const year = document.getElementById('Year')
const img = document.getElementById('codu')
const first = document.getElementById('1year')
const second = document.getElementById('1month')
const third = document.getElementById('1day')

img.addEventListener('click',(e)=>{
    e.preventDefault()
    validateInput()
    calculate()

})

function validateInput(){
    let dayval = day.value.trim()
    let monthval = month.value.trim()
    let yearval = year.value.trim()
    
    if(dayval==''){
        setError(day,"enter the date")
    }
    else if(dayval>31){
        setError(day,"enter a valid date")
    }
    else if(monthval==''){
        setError(month,"enter the date")
    }
    else if(monthval>12){
        setError(month,"enter a valid month")
    }
    else if(yearval==''){
        setError(year,"year is required")
    }
    else if(isNaN(yearval)){
        setError(year,"year must be a number")
    }
    else{
        setsuccess(day)
        setsuccess(month)
        setsuccess(year)
    }
}

function setError(element,message){
    let box = element.parentElement;
    let input = box.querySelector('.error')
    input.innerHTML = message;
    box.classList.add('error')
    box.classList.remove('success')
}

function setsuccess(element){
    let box = element.parentElement;
    let input = box.querySelector('.error')
    input.innerHTML = '';
    box.classList.add('success')
    box.classList.remove('error')
}

function calculate() {
    let birthYear = parseInt(year.value);
    let birthMonth = parseInt(month.value) - 1; // JavaScript months are 0-based
    let birthDay = parseInt(day.value);

    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth();
    let currentDay = currentDate.getDate();

    let years = currentYear - birthYear;
    let months = currentMonth - birthMonth;
    let days = currentDay - birthDay;

    if (days < 0) {
        months--;
        days += new Date(currentYear, currentMonth, 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    first.innerHTML = years;
    second.innerHTML = months;
    third.innerHTML = days;
}
