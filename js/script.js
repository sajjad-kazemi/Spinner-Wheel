const $ = document
const wheel = $.querySelector('#wheel-container')
const insertList = $.querySelector('#insertInfo')
const numbers = $.querySelectorAll('.info div')

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
  })
})