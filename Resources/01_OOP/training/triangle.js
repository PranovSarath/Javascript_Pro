function getTriangleArea(a, b){
    return (a * b) / 2;
}

function getTriangleHypotenuse(a, b){
    return Math.sqrt(a ** 2 + b ** 2);
}


const myTri = {
    a: 3,
    b: 4,
    getArea: function(){
        return (this.a * this.b) / 2;
    },
    getHypotenuse: function(){
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    },
};


class Triangle {
    constructor(a, b){
        if (!Number.isFinite(a) || a <= 0)
            throw new Error(`Invalid value for a: ${a}`);

        if (!Number.isFinite(b) || b <= 0)
            throw new Error(`Invalid value for b: ${b}`);    
        this.a = a;
        this.b = b;
    }

    getArea() {
        return (this.a * this.b) / 2;
    }

    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2) ;
    }

    describe(){
        return `The triangle with a side A of ${this.a} and side B of ${this.b} and with an area of ${this.getArea()} says HI!!!`;
    }
}



class ColorTriangle extends Triangle {
    constructor(a, b, color){
        super(a, b);
        this.color = color;
    }

    describe() {
        return `The triangle with a side A of ${this.a}, side B of ${this.b}, color of ${this.color} and with an area of ${this.getArea()} says HI!!!`;
    }
}


class ColorMoodTriangle extends ColorMoodTriangle {
    constructor(a, b, color, mood){
        super(a, b , color);
        this.mood = mood;
    }
}


