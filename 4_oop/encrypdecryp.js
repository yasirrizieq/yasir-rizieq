class User {
    constructor(props){
        this.name = props.name;
        this.email = props.email;
        this.password = this.#encript(props.password);
    }

    #encript(password){
        return `hash_${password}`;
    }

    #decrypt(hash){
        return hash.split(`hash_`)[1];
    }

    checkPassword(password){
        return this.#decrypt(this.password) == password;
    }
}

let anggi = new User({
    name: 'anggi',
    email: 'anggi@mail.com',
    password: 'anggi123'
});

console.log(anggi.checkPassword('anggi123'));