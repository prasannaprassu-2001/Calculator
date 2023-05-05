function display(cal){
    document.getElementById('operation').value += cal;
    }
    function bb(){
        document.getElementById('operation').value=" ";
    }
    function play(){
        let result=eval(document.getElementById('operation').value);
        document.getElementById('operation').value = result;
    }
    function disp(){
       var result = document.getElementById('operation').value 
       result = result.toString().slice(0, -1);
       console.log(result);

       document.getElementById('operation').value = result;
    }