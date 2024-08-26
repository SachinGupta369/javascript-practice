const form = document.querySelector('form')
// const submit = document.querySelector('#submit')
// below usecase will give u empty value
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit',function(e){
    e.preventDefault()
    console.log(e);
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height == '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please provide valid Number ${height}`
    }else if(weight == '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please provide valid number ${weight}`
    }else{
        const bmi = ((weight) / ((height * height)/10000)).toFixed(2)
        result.innerHTML = `<span>${`Result:`,bmi}</span>`
    }
})

