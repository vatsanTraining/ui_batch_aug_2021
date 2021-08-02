class Product{

    constructor(id,name){

        this.id=id;
        this.name =name;

    }

    toString() {

        return `${this.id}
                      ,${this.name}`;
    }
}

module.exports = Product;