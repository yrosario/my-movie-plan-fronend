import { RoleEnty } from "./role-entity";

export class UserEntity{
    id?:number;
    username:string;
    email:string;
    fName:string;
    lName:string;
    address:string;
    city:string;
    birthday:string;
    password:string;
    active:boolean;
    roles:Array<RoleEnty>;
    
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

    getRoles():Array<RoleEnty>{
        return this.roles;
    }

    setRole(name:string):void{
        let role = new RoleEnty();
        role.name = name;
        this.roles.push(role);
    }






    
}