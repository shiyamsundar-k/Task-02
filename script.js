var req = new XMLHttpRequest;
req.open('GET','https://restcountries.eu/rest/v2/all',true);
req.send();
req.onload = function(){
    var data = JSON.parse(this.response);
    for (let i =0; i<250;i++){
        console.log(data[i].name);
    }
}


