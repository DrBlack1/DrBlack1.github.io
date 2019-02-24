class Volvo {
    constructor(car){
        this._manufactuer = this._manufactuer;
        this._model = this._model;
        this._color = this._color;
    }

    getMaufacturer(){
        return this._manufacturer;
    }
    getModel(){
        return this._model;
    }
    getColor(){
        return this._color;
    }
    getAccelerate(){
        console.log('0 - 60 2s')
    }
    getBraking(){
        console.log('stop and brake!');
    }
    getBeep(){
        console.log('sound the horn!');
    }
    getSteering(){
        console.log('turn the wheel');
    }
};

const car = new Volvo('model', 'color');
car.getBeep();
