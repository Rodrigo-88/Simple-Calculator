function insert(number) {
 let num = document.getElementById('output').innerHTML 
 document.getElementById('output').innerHTML = num + number

}

function calculate(){
    let result = document.getElementById('output').innerHTML
    if(result){
        document.getElementById('output').innerHTML = eval(result)
    }else{
        document.getElementById('output').innerHTML = "0"
    }
}

function correct(){
    let result = document.getElementById('output').innerHTML
    document.getElementById('output').innerHTML = result.substring(0, result.length -1)
}

function clearDisplay(){
    document.getElementById('output').innerHTML = ''
}


