const allImages = Array.from(
    { length: 1000},
    (_, i) => `https://placeimg.com/640/480/any?images=${i}`
);

funtion* getBatchOfImages(images, batchsize=20){
    let currIndex = 0;
    images.slice(currIndex, curr_index + batchsize);
    currIndex += batchsize;
}


const imageGen = getBatchOfImages(allImages);
imageGen.next().value;
