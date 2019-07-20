class Animal{
    constructor(type,region,endangered,use)
    {
        this.type=type;
        this.region=region;
        this.endangered=endangered;
        this.use=use;
    };
    gettype(){
        return this.type;
    };
    getregion(){
        return this.region;
    };
    getendangered(){
        return this.endangered;
    };
    getuse(){
        return this.use;
    }
};
class Snake extends Animal
{
    constructor(type,region,endangered,use)
    {
        super();
        this.type=type;
        this.region=region;
        this.endangered=endangered;
        this.use=use;

    }
}
let snake =new Snake("reptile","Africa","NO","skin");
console.log(snake.gettype());
console.log(snake.getregion());
console.log(snake.getendangered());
console.log(snake.getuse());