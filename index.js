class Dog {
    constructor(name, breed) {
      this.name = name;
      this.breed = breed;
      this.energyLevel = 100;
    }
  
    bark() {
      console.log(`${this.name} (a ${this.breed} dog) is barking! Woof! Woof!`);
    }
  
    play() {
      if (this.energyLevel > 0) {
        console.log(`${this.name} (a ${this.breed} dog) is playing fetch.`);
        this.energyLevel -= 10;
      } else {
        console.log(`${this.name} (a ${this.breed} dog) is too tired to play.`);
      }
    }
  
    sleep() {
      console.log(`${this.name} (a ${this.breed} dog) is taking a nap.`);
      this.energyLevel = 100;
    }
  }
  
  // Example usage
  const doggo1 = new Dog('Buddy', 'Golden Retriever');
  const doggo2 = new Dog('Charlie', 'Dachshund');
  
  doggo1.bark();
  doggo1.play();
  doggo1.sleep();
  
  doggo2.bark();
  doggo2.play();
  