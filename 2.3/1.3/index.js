function check(){
    let integer=parseInt(document.getElementById('int').value);
    if (integer%2==0) {
        document.write('No is Even.');
    }
    else{
        document.write('No is odd.');
    }
}