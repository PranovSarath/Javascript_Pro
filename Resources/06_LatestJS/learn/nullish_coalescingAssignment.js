function doSomeSetup(options = {}){
    options.timeout ||= 3000;
    options.retries ||= 5;
    console.log(options); 
}


doSomeSetup();