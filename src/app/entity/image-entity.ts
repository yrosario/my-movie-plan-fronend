export class ImageEntity{
    id:number;
    image:string;

    constructor(id:number, image:string){
        this.id = id;
        this.image = image;
    }

    setId(id:number){
        this.id = id;
    }

    getId():number{
        return this.id;
    }

    setImage(image:string){
        this.image = image;
    }
    getImage():string{
        return this.image;
    }
}