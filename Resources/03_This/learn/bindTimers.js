class Counter{
    constructor(startNum=0, incrementAmt=1){
        this.count = startNum;
        this.incrementAmt = incrementAmt;
    }

    start(){
        setInterval(this.incrementAndPrint.bind(this), 1000);
    }

    incrementAndPrint(){
        console.log(this.count);
        this.count += this.incrementAmt;
    }
}

// const counter = new Counter(1, 100);
// counter.start();