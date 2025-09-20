let timeSecond = 0
let timeMinute = 0
let timeHour = 9
let intervalid = ''
let isStart = false
let timeMs = 0


const startButton = document.querySelector('.startButton')
const resetButton = document.querySelector('.resetButton')

startButton.addEventListener('click', () => {
    start()
})

resetButton.addEventListener('click', () => {
    reset()
})

function reset() {
    timeSecond = 0 
    timeMinute = 0
    timeHour = 0
    timeMs = 0
   s()
   document.querySelector('.miliSecond').classList.remove('opacity1')
}
 

function start() {
   

    if (!isStart) {
        intervalid = setInterval(() => {
        timeMs += 10
       document.querySelector('.miliSecond').innerText = timeMs

        if (timeMs === 1000) {
            addSecond()

        } else if (timeSecond === 59) {
            addMinute()
        } else if (timeMinute === 60 ) {
            addHour()
        } 
        
    }, 10);

        isStart = true
         startButton.innerText = 'Stop'
         resetButton.disabled = true
         document.querySelector('.miliSecond').classList.add('opacity1')
         resetButton.classList.add('disable')
         

    } else {
        clearInterval(intervalid)
        isStart = false
        startButton.innerText = 'Start'
        resetButton.disabled = false
        resetButton.classList.remove('disable')
    };

    

    
        
}


function s() {
    
        document.querySelector('.second').innerText = display(timeSecond)
        document.querySelector('.minute').innerText = display(timeMinute)
        document.querySelector('.hour').innerText = display(timeHour)
        document.querySelector('.miliSecond').innerText = timeMs
       
}

function addMinute() {
        timeSecond = -1
        timeMinute +=1
            setTimeout(()=>{
            document.querySelector('.minute').innerText = display(timeMinute)  
            },1000)
}

function addHour() {
     timeMinute = 0
        timeHour +=1
            document.querySelector('.hour').innerText = display(timeHour)  
            
}
    

function display(p) {
   if (p < 10) {
    p = '0' + p
    
}  return p
}

function addSecond() {
    timeMs = 0
    timeSecond += 1
    document.querySelector('.second').innerText = display(timeSecond)  
}



function save() {
   sto 
}

