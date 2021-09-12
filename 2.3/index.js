/*Enter your Savings*/


function save(){
    let saving=(parseInt(document.getElementById("saving").value));
    if (saving>5000)
    {
        if (saving>10000) {
            document.write('Go with Neha on Roadtrip');
        }
        else{
            document.write('Go with Neha for Shopping');
        }
    }
    else if (saving<5000) {
        if (saving>2000) {
            document.write('Go with Rashmi on Date');
        }
        else{
            document.write('Go with friends');
        }
    }
}