interface email {
  name: string;
  email: string;
}

function sendEmail(email: email) {
  console.log(`Sending email to ${email.name} at ${email.email}`);
}

class User implements email {
  constructor(
    public name: string,
    public email: string,
  ) {}
}
const user1 = new User("Alice", "alice@example.com");
sendEmail(user1);
