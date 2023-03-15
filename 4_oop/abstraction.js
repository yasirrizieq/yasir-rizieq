const PublicServer = (Base) => class extends Base {
    save(){
        console.log("menyelamatkan orang lain")
    }
}

//military > bisa menembak
const Military = (Base) => class extends Base {
    shoot(){
        console.log("dor dor dor")
    }
}
//class human
class Human {
    construction(props){
        this.name = props.name;
        this.address = props.address;
        this.profession = this.constructor.name;
    }
    introduce(){
        console.log(`my name is ${this.name}`)
    }
    work(){
        console.log(`${this.constructor.name}worl!`)
    }
}
//class doctor -> public server
class Doctor extends PublicServer(Human){
    constructor(props){
        super(props)
    }
    work(){
        super.work()
        super.save()
    }
}

// class police -> public server -> military
class Police extends PublicServer(Military(Human)){
    constructor(props) {
        super(props);
        this.rank = props.rank;
    }
    work(){
        super.work()
        super.save()
        super.shoot()
    }
}
// class army -> Public server -> military
class Army extends PublicServer(Military(Human)){
    constructor(props){
        super(props)
        this.rank = props.rank
    }
    work(){
        super.work()
        super.save()
        super.shoot()
    }
}