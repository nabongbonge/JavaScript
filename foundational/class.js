'use strict'
// Object-oriented programming
// class : template
// object : instance of a class
// JavaScript class
// - introduced in ES6
// - syntactical sugar over prototype-baeed inheritance

// 1. Class declareations
startLog('Class declareations');
class Person {
    // constructor
    constructor(name, age = 30) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name} : hello!`);
    }
}

const lee = new Person('lee');
console.log(lee.name);
console.log(lee.age);
lee.speak();

// 2. Getter and Setter
startLog('Getter and Setter');
class User {
    constructor(firtstName, lastName, age) {
        this.firtstName = firtstName;
        this.lastName = lastName;
        
        this.age = age;
        // getter를 정의하면, 메모리에 있는 age를 읽어오는게 아니라 getter를 호출.
        // setter를 정의하면, age에 대해 바로 값이 할당되는것이 아니라 setter를 호출.

        /**
         * setter 호출과정
         * 1. user1 객체 생성하여 age에 값을 할당한다. → set age(value)호출한다.
         * 2. thi.age에 value를 할당한다. → set age(value)호출한다.
         * 3. 무한 호출하게 되므로 에러 발생한다. 'Maximum call stack size exceeded'
         */

        /**
         * 해결방안
         * getter/setter의 내부속성을 사용하는곳에 _를 붙여 this._age로 변경한다.
         * '_'는 private하다 또는 내부속성임을 뜻한다.
         * 그렇기에 외부에서 접근은 가징하지만 외부에서 사용하면 안된다는 의미를 가지고 있다.
         * */
    }

    get age(){
        // return this.age;
        return this._age;
    }

    set age(value){
        // this.age = value; 
        this._age = value; 
    }
}

const user1 = new User('lee', 'jeasok', 30);
console.log(user1.age);
console.log(user1.lastName);

// 3. Fields (public, private)
// Too soon! 
// 아직 모든 브라우져에서 지원이 원활하지않기때문에 babel을 이용해서 써야됨.
startLog('Fields (public, private)');
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefined

// 4. Static propertise and methods
// Too soon! 
// static은 object마다 할당되는값이 아니라 class 자체에 사용할수있음.
// object/데이터에 상관없이 클래스내에서 공통적으로 쓸수있는것이라면, static/static method를 사용하는것이 메모리 효율좋음.
startLog('Static propertise and methods');
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.printPublisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance (상속 & 다형성)
// a way for one class to extend another class.
startLog('Inheritance');
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawong ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {

    draw() {
        super.draw();
        console.log('삼각형');
    }

    // override
    getArea() {
        return (this.width * this.height) / 2; 
    }

    // override : object 
    toString() {
        return `riangle coloe : ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking : instanceOf
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true


// Javascript reference
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference