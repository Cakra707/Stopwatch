

let time = JSON.parse(localStorage.getItem('time')) || {

    timeSecond: 0,
    timeMinute: 0,
    timeHour:0, 
    timeMs: 0

}

s()
save()
let intervalid = ''
let isStart = false

if (localStorage.getItem('ss') === 'true') {
    document.querySelector('.miliSecond').classList.add('opacity1')
}

const startButton = document.querySelector('.startButton')
const resetButton = document.querySelector('.resetButton')

startButton.addEventListener('click', () => {
    start()
    document.querySelector('.miliSecond').classList.add('opacity1')
    localStorage.setItem('ss', 'true')
})

resetButton.addEventListener('click', () => {
    reset()
     document.querySelector('.miliSecond').classList.remove('opacity1')
    localStorage.setItem('ss', 'false')
})

function reset() {
    time.timeSecond = 0 
    time.timeMinute = 0
    time.timeHour = 0
    time.timeMs = 0
   s()
   
  
   localStorage.removeItem('time')
}
 


function start() {
   

    if (!isStart) {
        intervalid = setInterval(() => {
        time.timeMs += 10
       document.querySelector('.miliSecond').innerText = time.timeMs
            save()
        if (time.timeMs === 1000) {
            addSecond()

        } else if (time.timeSecond === 59) {
            addMinute()
        } else if (time.timeMinute === 60) {
            addHour()
        } 
        
    }, 10);

        isStart = true
         startButton.innerText = 'Stop'
         resetButton.disabled = true
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
    
        document.querySelector('.second').innerText = display(time.timeSecond)
        document.querySelector('.minute').innerText = display(time.timeMinute)
        document.querySelector('.hour').innerText = display(time.timeHour)
        document.querySelector('.miliSecond').innerText = time.timeMs
        
       
}

function addMinute() {
        time.timeSecond = -1
        time.timeMinute +=1
        
            setTimeout(()=>{
            document.querySelector('.minute').innerText = display(time.timeMinute)  
            },1000)
            
}

function addHour() {
     time.timeMinute = 0
        time.timeHour +=1
        setTimeout(()=>{
            document.querySelector('.hour').innerText = display(time.timeHour)
        },1000)
        
        
              
            
}
    

function display(p) {
   if (p < 10) {
    p = '0' + p
    
}  return p
}


function addSecond() {
    time.timeMs = 0
    time.timeSecond++
     document.querySelector('.second').innerText = display(time.timeSecond) 
      
     
     

};


function save() {
    localStorage.setItem('time', JSON.stringify(time))
}







