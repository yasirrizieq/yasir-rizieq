// create parent class
class Human {
    constructor(props) {
      this.name = props.name;
      this.address = props.address;
    }
  
    introduce() {
      console.log(`Hello my name is ${this.name}!`);
    }
  
    work() {
      console.log("Work!");
    }
  }
  
  // create child class
  class Proggrammer extends Human {
    constructor(props) {
      super(props);
      this.programmingLanguage = props.programmingLanguage;
    }
  }
  
  let mark = new Proggrammer({
    name: "Marc",
    address: "Canada",
    programmingLanguage: ["JavaScript", "TypeScript", "PHP", "Golang"],
  });
  console.log(mark.name);
  console.log(mark.address);
  console.log(mark.programmingLanguage);
  mark.introduce();
  mark.work();