const $ = document
const wheel = $.querySelector('#wheel-container')
const numbers = $.querySelectorAll('.info div')
const insertList = $.querySelector('#insertInfo')
const insertInfo = $.querySelectorAll('#insertInfo input')



numbers.forEach(item =>{
  item.addEventListener('click',(e)=>{
    for (let j=0 ; j<numbers.length;j++){
      numbers[j].className = ''
      numbers[j].nextElementSibling.disabled = true;
    }
    for (let i=0 ; i<numbers.length;i++){
      if(i > e.target.textContent - 1){
        break
      }
      numbers[i].className = 'active'
      numbers[i].nextElementSibling.disabled = false
    }
    changeWheel(e.target.textContent)
  })
})

const changeWheel = (num) => {
  for (let i of wheel.children){
    if(i.id === 'rotateBtn'){
      continue
    }
    i.remove()
  }
  if(num == 1){
    const option = $.createElement('div')
    option.id= 'option1'
    option.className= 'oneOfone'
    option.textContent = insertInfo[0].value
    wheel.appendChild(option)
  } else if(num == 2){
    makeOption(num,'oneOftwo').forEach(item =>{
      wheel.appendChild(item)
    })
  } else if(num == 3){
    makeOption(num,'oneOfthree').forEach(item =>{
      wheel.appendChild(item)
    })
  } else if(num == 4){
    makeOption(num,'oneOffour').forEach(item =>{
      wheel.appendChild(item)
    })
  } else if(num == 5){
    makeOption(num,'oneOffive').forEach(item =>{
      wheel.appendChild(item)
    })
  } else if(num == 6){
    makeOption(num,'oneOfsix').forEach(item =>{
      wheel.appendChild(item)
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
