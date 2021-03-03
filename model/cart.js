module.exports = function Cart(info){
    //a qui debo de desencriptar
    this.items = info;

    this.add = function (item)
    {
        var storedItem = this.items;
        if(!storedItem){
            storedItem = this.items = {item: item}
        }
    }

}