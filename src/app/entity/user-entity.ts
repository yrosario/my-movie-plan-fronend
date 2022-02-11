export class UserEntity{
    username:string;
    email:string;
    fName:string;
    lName:string;
    address:string;
    city:string;
    birthday:string;
    password:string;
    active:boolean;
    roles:[{}];
    
    constructor(username:string,email:string, fName:string, lName:string, address:string, city:string,
                birthday:string, password:string)
    {
        this.username = username;
        this.email = email;
        this.fName = fName;
        this.lName = lName;
        this.address = address;
        this.city = city;
        this.birthday = birthday;
        this.password = password;
        this.active = true;
        this.roles = [{"name":"ROLE_USER"}];
        
    }

    getUsername():string{
        return this.username;
    }

    setUsername(username:string):void{
        this.username = username;
    }

    getFName():string{
        return this.fName;
    }

    setFname(fName:string):void{
        this.fName = fName;
    }

    getLName():string{
        return this.lName;
    }

    setLName(lName:string):void{
        this.lName = lName;
    }

    /*    address:string;
    city:string;
    birthday:string;
    password:string;
    active:boolean; */

    getCity():string{
        return this.city;
    }

    setCity(city:string):void{
        this.city;
    }

    getBirthDay():string{
        return this.city;
    }

    setBirthDay(birthday:string){
        this.birthday = birthday;
    }

    getPassword():string{
        return this.password;
    }

    getActive():boolean{
        return this.active;
    }

    getRoles():[{}]{
        return this.roles;
    }

    setRole(role:string):void{
        this.roles.push("name", role);
    }






    
}