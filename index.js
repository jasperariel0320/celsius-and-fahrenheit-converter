var btn = document.getElementById('btn')
var getvalue = () => {
    var input_field = document.getElementById('input_Field').value
    var input_value = document.getElementById('inputValue').value
    var input = document.getElementById('output')
    if(input_value == 'cel'){
        var Fahrenheit = (input_field * 1.8) + 32
        input.innerHTML = `${Math.trunc(Fahrenheit)} °C`
        
    }else if(input_value == 'fer'){
        var celsius = (input_field - 32) * 5/9   
        input.innerHTML = `${ Math.trunc(celsius)} °F`
    }
}
btn.addEventListener('click',getvalue)