class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value){
       // return this._hash[keys] = [vals]
       let address = this._hash(key);
       if(!this.data[address]){
        this.data[address]= []
        this.data[address].push([key,value])
       }
    }

    get(keys){
        return this._hash[keys]
    }
}

const myHashTable = new HashTable(50);
myHashTable.get('apples')