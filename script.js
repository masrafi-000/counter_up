const counters = document.querySelectorAll('.count')

counters.forEach((count) => {
    count.innerText = "0"
    const upadateCounter = () => {
        const value = Number(count.getAttribute("data-value"));
        const default_value = Number(count.innerText);
        const duration = 10;
        const increment = 1;
        if (default_value < value){
            count.innerText = (default_value + increment) ;
            setTimeout(upadateCounter, duration)
        }
        else{
            count.innerText = value;
        }
        
    };
    upadateCounter()
})
// `${Math.ceil(c + increment)}`