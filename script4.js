var request =new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload=function() {
    var result = JSON.parse(request.response);
    console.log(result);
    var bub=[];
    for (let i=0; i<result.length;i++){
        bub.push(result[i]);
    }
    result.forEach((r) => {
       
        console.log(`${r}`);
    
    })
}