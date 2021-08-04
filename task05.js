var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function() {
    var data= JSON.parse(this.response);
    console.log(data);
    var regn= data.filter((elem)=>elem.region==="Asia");
    console.log(regn); 

    var pop=data.filter((elem)=>elem.population<200000);
    console.log(pop);

    var money=data.filter((elem)=>{
        for(let i in elem.currencies){
            if(elem.currencies[i].code==='USD')
            return true;
        }
        
    });
    console.log(money);

    var sum=data.map((elem)=>elem.population)
    const sum1=sum.reduce((acc,val)=>acc+val);
    console.log(sum1);
}
