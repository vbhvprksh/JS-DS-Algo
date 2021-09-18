function calc(){
    
    let a=parseInt(document.getElementById('a').value);
    let b=parseInt(document.getElementById('b').value);
    let c=parseInt(document.getElementById('c').value);
    
    if (a>b) {
        if (a>c) {
            document.write('A is greatest');
        }
        else{
            document.write('C is greater.');
        }
    }
    else if (b>a) {
        if (b>c) {
            document.write('B is greatest.');
        }
        else{
            document.write('C is greatest.');
        }
    }

}