class Circle {
    static allowedColors = new Set(["red", "green", "blue"]);

    constructor(radius, color){
        this._radius = radius;
        this.setColor(color);
    }

    setColor(newColor){
        if(Circle.allowedColors.has(newColor)){
            this._color = newColor;
        }
        else{
            throw new Error('This color is not allowed!');
        }
    }

    get diameter(){
        return this._radius * 2;
    }

    get area(){
        return this._radius * 2 * Math.PI;
    }

    set radius(value){
        if (value < 0){
            throw new Error('radius cannot be a negative value');
        }
        else{
            this._radius = value;
        }
    }

    get color() {
        return this._color;
    }

    set color(newColor) {
        this.setColor(newColor);
    }
}