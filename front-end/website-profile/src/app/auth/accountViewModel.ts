export class AccountViewModel {
    userName: string;
    name: string;
    password: string;
    email: string;
    birthDate: string;
    address: string;
    
    constructor(userName: string, name: string, password: string, email: string, birthDate: string, address: string) {
        this.name = name;
        this.userName = userName;
        this.password = password;
        this.email = email;
        this.birthDate = birthDate;
        this.address = address;
    }
}