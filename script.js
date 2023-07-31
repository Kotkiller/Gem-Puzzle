
// ..................................................Constans............................................

const contentArea=document.createElement('div')       /*область контента*/
const puzzleContainer=document.createElement('div')   /*игровое поле*/  
const puzzleBlock=document.querySelector('puzzle-block')
const block=document.createElement('div')
const volumeIconOn=document.createElement('img')      
volumeIconOn.src='./assets/on.png'
const volumeIconOff=document.createElement('img')
volumeIconOff.src='./assets/off.png'
const buttonsContainer=document.createElement('div')   /*контейнер для кнопок*/
const shuffleButton=document.createElement('button')   /*кнопка перемешивания*/
const saveButton=document.createElement('button')      /*кнопка сохранения*/
const loadButton=document.createElement('button')      /*кнопка загрузки*/
const movesTime=document.createElement('div')          /*контейнер с временем и ходами*/
const moves=document.createElement('h2')               /*ходы*/
let time=document.createElement('h2')                /*время*/
const frameSize=document.createElement('h2')           /*размер игрового поля*/
const otherSizesContainer=document.createElement('div') /*контейнер с другими размерами игрового поля*/ 
const otherSize=document.createElement('h2')         /*другие размеры игрового поля*/ 
const firstSize=document.createElement('h2')         /*поле 3х3*/ 
const secondSize=document.createElement('h2')        /*поле 4х4*/ 
const thirdSize=document.createElement('h2')         /*поле 5х5*/ 
const fourthSize=document.createElement('h2')        /*поле 6х6*/ 
const fifthSize=document.createElement('h2')         /*поле 7х7*/ 
const sixthSize=document.createElement('h2')         /*поле 8х8*/ 
const moveAudio = new Audio('audio/move.mp3')
let isPlay = true;
const movesBlock = document.querySelector('moves')
// const timeBlock = document.querySelector('time')
// let moves = 0, time = 0
let blockSize=75
const empty={
    value:0,
   top:0,
   left:0 
}
let count=0

//.................................................... Creating blocks......................................
function move(index){
         
    const block=blocks[index]
    const leftDiff=Math.abs(empty.left-block.left)
    const topDiff=Math.abs(empty.top-block.top)

          if(leftDiff+topDiff>1){
        return
    }       
        block.element.style.left=`${empty.left*blockSize}px`
        block.element.style.top=`${empty.top*blockSize}px`
       const emptyLeft=empty.left
       const emptyTop=empty.top
       empty.left=block.left
       empty.top=block.top
       block.left= emptyLeft
       block.top= emptyTop
       const isFinished=blocks.every(block=>{
      return block.value===block.top*4+block.left
       })
    
       if (isFinished){
    alert("Hooray! You solved the puzzle in ##:## and " + `${count} moves`)
       }
           moveAudio.play()

            count+=1;

           moves.textContent ='Moves:'+`${count}`;


           saveButton.onclick = function () {
            localStorage.setItem("test", JSON.stringify(blocks));
            localStorage.setItem("test2", JSON.stringify(count));
          };

          let startTime = new Date()
	let endTime = new Date()

           };
             
    const numbers=[...Array(15).keys()]
    .map(x=>x+1)
    .sort(()=>Math.random()-0.5)

        const blocks=[]
        blocks.push(empty)
    
               for(let i=1; i<=15; i++){
            const value=numbers[i-1]
            const block=document.createElement('div')
            block.className='block'
            block.innerHTML=value
            puzzleContainer.append(block)
        
            const left= i % 4
            const top= (i-left) / 4
        
            blocks.push({
                value: value,
                left:left,
                top:top,
                element:block
            })
         
            block.style.left=`${left * blockSize}px`
            block.style.top=`${top * blockSize}px`
        
            block.addEventListener('click', ()=>{
                move(i)
                     })   

                     moves.textContent ='Moves:'+`${count}`  

                      
        }

  
    
secondSize.addEventListener('click', ()=>{
    for(let i=1; i<=15; i++){
        const value=numbers[i-1]
        const block=document.createElement('div')
        block.className='block'
        block.innerHTML=value
        puzzleContainer.append(block)
    
        const left= i % 4
        const top= (i-left) / 4
    
        blocks.push({
            value: value,
            left:left,
            top:top,
            element:block
        })
     
        block.style.left=`${left * blockSize}px`
        block.style.top=`${top * blockSize}px`
    
        block.addEventListener('click', ()=>{
            move(i)
                 })         
    }
})



firstSize.addEventListener('click', firstFrame)

function firstFrame(){
    for(let i=1; i<=9; i++){
        const value=numbers[i-1]
        const block=document.createElement('div')
        block.className='block'
        block.innerHTML=value
        puzzleContainer.append(block)
    
        const left= i % 4
        const top= (i-left) / 4
    
        blocks.push({
            value: value,
            left:left,
            top:top,
            element:block
        })
     
        block.style.left=`${left * blockSize}px`
        block.style.top=`${top * blockSize}px`
    
        block.addEventListener('click', ()=>{
            move(i)
                 })         
    }
}
// .................................................Class names............................................

puzzleContainer.className='puzzle'
shuffleButton.className='button1'
block.className='puzzle-block'
saveButton.className='button2'
loadButton.className='button3'
volumeIconOn.className='volume'
volumeIconOff.className='volume2'
buttonsContainer.className='buttonsContainer'
contentArea.className='contentArea'
moves.className='moves'
time.className='time'
movesTime.className='movesTime'
frameSize.className='frameSize'
otherSizesContainer.className='otherSizesContainer'
otherSize.className='otherSize '
firstSize.className='frameSizes firstSize'
secondSize.className='frameSizes secondSize'
thirdSize.className='frameSizes thirdSize'
fourthSize.className='frameSizes fourthSize'
fifthSize.className='frameSizes fifthSize'
sixthSize.className='frameSizes sixthSize'

otherSize.textContent='Other sizes:'
firstSize.textContent='3x3'
secondSize.textContent='4x4'
thirdSize.textContent='5x5'
fourthSize.textContent='6x6'
fifthSize.textContent='7x7'
sixthSize.textContent='8x8'
shuffleButton.textContent='Shuffle and start'
saveButton.textContent='Save'
loadButton.textContent='Load'
moves.textContent='Moves:'
time.textContent='Time:'
frameSize.textContent='Frame size:'

// ...................................................Addings..........................................

buttonsContainer.append(shuffleButton,saveButton,loadButton, volumeIconOn,volumeIconOff)
contentArea.append(buttonsContainer,puzzleContainer,movesTime, frameSize,otherSizesContainer)
document.body.append(contentArea)
movesTime.append(moves, time)
otherSizesContainer.append(otherSize, firstSize, secondSize, thirdSize, fourthSize, fifthSize, sixthSize)


//................................................... Кнопка включения звука....................................................................

volumeIconOff.addEventListener('click', ()=>{
    moveAudio.muted=false
    volumeIconOff.style.display='none'
    volumeIconOn.style.display='block'
})
    //  ................................................. Кнопка выключения звука.........................................................
    
    volumeIconOn.addEventListener('click', ()=>{
        moveAudio.muted=true
        volumeIconOff.style.display='block'
        volumeIconOn.style.display='none'
     })

       
// ...............................................Кнопка перемешивания.....................................................

shuffleButton.addEventListener('click', ()=> {
    // block.innerHTML=''
    const empty={
        value:0,
       top:0,
       left:0 
    }
    const blocks=[]
    blocks.push(empty)
     const numbers=[...Array(15).keys()].map(x=>x+1).sort(()=>Math.random()-0.5)
   let shuffled=numbers
    .map(value=>({value, sort:Math.random()}))
    .sort((a,b)=>a.sort-b.sort)
    .map(({value})=>value)


    for(let i=0; i<=15; i++){
        const value=numbers[i-1]
        // const block=document.createElement('div')
        // block.className='block'

   
        const left= i % 4
        const top= (i-left) / 4
    
       // blocks.push({
        //     value: value,
        //     left:left,
        //     top:top,
        //     element:block

       block.style.left=`${left * blockSize}px`
        block.style.top=`${top * blockSize}px`
        block.addEventListener('click', ()=>{
            move(i)
                 })  
    }
       
console.log(numbers)
    })

  

// .............................................................Таймер времени........................................................

// let timer = 0;
// let timerInterval;




//  function vpered() {
//   sanovka();
//   timerInterval = setInterval(function() {
//   timer += 1/60;
//   time = Math.floor((timer - Math.floor(timer))*100);
// time.innerHTML = msVal < 10 ? "0" + msVal.toString() : msVal;
//   })
// }


// function sanovka() {
//   clearInterval(timerInterval);
 
// }


 
       

