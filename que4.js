function myFunction() {
    var str = ["pooja","mahesh","shir"];
    var ch="a";
    for(let i=0;i<str.length-1;i++)
    {
        if((str[i].includes(ch))==true)
            console.log(str[i]);
        else
            console.log("Any array element not contain a");
    }
}
myFunction();
