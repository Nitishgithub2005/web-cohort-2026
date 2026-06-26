
type UserId = string
interface User {
    id: UserId,
    fname:string,
    lname:string,
    email?:string,
    contact :{
        mobile:string
    },
    address:{
        street : number,
        pin:number,
        country:string
    }
}

class InMemoryDB{
    private _db : Map<UserId, User>
    constructor(){
        this._db = new Map<UserId, User>();
    }
    public insertUser(data: User):UserId{
        if(this._db.has(data.id)){
            throw new Error(`User with ${data.id} id already exist`)
        }
        this._db.set(data.id,data)
        return data.id
    }
    public updateUser(id:UserId, updateUser: Omit<User,"id">){
        if(!this._db.has(id)){
            throw new Error(`User with ${id} id doesn't exist`)
        }
        this._db.set(id,{...updateUser,id})
        return true
    }
    public getUserById(id: UserId) : User{
        if(!this._db.has(id))
            throw new Error(`User with ID ${id} does not exist`)
        return this._db.get(id)!
    }
}

const myDb = new InMemoryDB()
myDb.insertUser({
    id: '1',
    fname : 'nitish',
    lname :'maladakar',
    contact:{
        mobile:'998657898',
    },
    address: {
        street:1,
        pin :12323,
        country:'India'
    }
    
})
console.log(myDb)