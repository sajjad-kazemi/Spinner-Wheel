const $ = document
let wheel = $.querySelector('#wheel-container')
const numbers = $.querySelectorAll('.info div')
const insertList = $.querySelector('#insertInfo')
const insertInfo = $.querySelectorAll('#insertInfo input')
const btn = $.querySelector('#rotateBtn')
const rotateRange = $.querySelector('#rotateRange')
let rotateOfNow = 0

// setting eventListener for numbers 
numbers.forEach(item =>{
  item.addEventListener('click',(e)=>{
    for (let j=0 ; j<numbers.length;j++){
      numbers[j].className = ''
      numbers[j].nextElementSibling.disabled = true;
      if(!(j>e.target.textContent - 1)){
        numbers[j].className = 'active'
        numbers[j].nextElementSibling.disabled = false
      }
    }
    e.target.nextElementSibling.focus()
    changeWheel(e.target.textContent)
  })
})

// function of wheel option changing by clicking numbers
const changeWheel = (num) => {
  dltAll(wheel.children.length)
  if(wheel.children.length === 1){
    addElem(num)
  } else{
    setTimeout(addElem(num),1000)
  }
}

const dltAll = async (num) =>{
  for (let i=1;i<num;i++){
    let elem = $.getElementById('option'+ i)
    if(elem){
      await elem.remove()
    }
  }
}

const addElem = (num) =>{
  if(num == 1){
    makeOption(num,'oneOfone').forEach(item => {
      wheel.append(item)
    })
  } else if(num == 2){
    makeOption(num,'oneOftwo').forEach(item =>{
      wheel.appendChild(item)
    })
  } else if(num == 3){
    makeOption(num,'oneOfthree').forEach(item =>{
      wheel.append(item)
    })
  } else if(num == 4){
    makeOption(num,'oneOffour').forEach(item =>{
      wheel.append(item)
    })
  } else if(num == 5){
    makeOption(num,'oneOffive').forEach(item =>{
      wheel.append(item)
    })
  } else if(num == 6){
    makeOption(num,'oneOfsix').forEach(item =>{
      wheel.append(item)
    })
  }else(alert('Error!'))
}

const makeOption = (num,cls) =>{
  let elemList = []
  for (let i = 0;i<num;i++){
    const option = $.createElement('div')
    option.id = 'option' + (i + 1).toString()
    option.className = cls
    option.textContent = insertInfo[i].value
    elemList.push(option)
  }
  return elemList
}

insertInfo.forEach((item,index) =>{
  item.addEventListener('input', e =>{
    const target = e.target
    const dist = $.getElementById('option'+(index+1))
    dist.textContent = target.value
    })
})

const rotate = (e) =>{
  const randNum1 = Math.floor(Math.random() * 360)
  const randNum2 = Math.floor((Math.random() * 20)-10)
  const resultRotate = randNum1 * randNum2
  wheel.style.transform = `rotateZ(${resultRotate}deg)`
    rotateRange.disabled = true;
    setTimeout(() =>{
    rotateRange.value = 0;
    rotateRange.disabled = false;
  },1500)
  rotateOfNow = parseInt(wheel.style.transform.slice(8).slice(0,wheel.style.transform.slice(8).indexOf('d')))
  console.log(rotateOfNow);
}

btn.addEventListener('click',rotate)

rotateRange.addEventListener('input',e =>{
  const rotateNum = parseInt(e.target.value) + rotateOfNow
  wheel.style.transform = `rotateZ(${rotateNum}deg)`
  console.log('number:',rotateNum,'\ntarget',e.target.value);
})

