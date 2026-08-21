class UserOne {
  // constructor(private firstName: string, private lastName: string) {};
  // private _firstName: string = '';
  protected _firstName: string = "";
  private _lastName: string = "";

  // constructor(firstName: string, lastName: string) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  // }

  set firstName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid First Name");
    }

    this._firstName = name;
  }

  set lastName(name: string) {
    if (name.trim() === "") {
      throw new Error("Invalid Last Name");
    }

    this._lastName = name;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }

  static eid = "USER";
  static greet() {
    console.log("Hello");
  }
}

console.log(UserOne.eid);
UserOne.greet();

// const jonas = new UserOne('Jonas', 'Shelby');
const jonas = new UserOne();
jonas.firstName = "Jonas";
// jonas.lastName = '';
jonas.lastName = "Shelby";

console.log(jonas.fullName);

class Employee extends UserOne {
  constructor(public jobTitle: string) {
    super();
    // super.firstName;
  }

  work() {
    console.log(this._firstName);
  }
}

abstract class UIElement {
  constructor(public indentifier: string) {}

  clone(targetLocation: string) {
    // Logic to clone the UI element;
  }
}

// let uiElement = new UIElement(); //Cannot create an instance of an abstract class.

class SideDrawerElement extends UIElement {
  constructor(
    public identifier: string,
    public position: "left" | "right",
  ) {
    super(identifier);
  }
}
