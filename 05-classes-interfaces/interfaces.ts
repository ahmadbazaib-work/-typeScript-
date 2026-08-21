interface Authenticatable {
  email: string;
  password: string | number;

  login(): void;
  logout(): void;
}

// interface Authenticatable { // declaration merging
//   role(): void;
// }

// Compared to declaration merging it does not touch the original interface
interface AuthenticatableAdmin extends Authenticatable {
  role: "Admin" | "User";
}

// class AuthenticatableUser implements Authenticatable, ABC1 {}
class AuthenticatableUser implements Authenticatable {
  constructor(
    public userName: string,
    public email: string,
    public password: string,
  ) {}

  login() {
    //...
  }

  logout() {
    //...
  }
}

function authenticate(user: Authenticatable) {
  user.login();
}

let user: Authenticatable;

user = {
  email: "test@example.com",
  password: "abc1",

  login() {
    //create the session
  },

  logout() {
    //clear the session
  },
};
