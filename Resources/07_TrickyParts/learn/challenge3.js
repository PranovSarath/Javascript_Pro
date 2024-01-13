function* rangeGenerator(start, end){
    const step = start > end ? -1 : 1;
    
    for(let i=start; start > end ? i >= end : i <= end; i += step){
        yield i;
    }
}