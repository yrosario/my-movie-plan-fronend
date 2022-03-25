import { CategoryEntity } from "./category-entity";
import { ImageEntity } from "./image-entity";


export class MovieEntity{
     id: number;

     categories:Array<CategoryEntity>;
     movieName:string;
     duration:number;
     price:number;
     images:Array<ImageEntity> = new Array();

    constructor(id:number, category:CategoryEntity, movieName:string, duration:number, price:number, images:ImageEntity[]){
        this.id = id;
        if(category != null){this.categories.push(category)};
        this.movieName = movieName;
        this.duration = duration;
        this.price = price;
        this.images = images;
    }

    getId(){
        return this.id;
    }

    setId(id:number){
        this.id = id;
    }

    getCategories(){
        return this.categories;
    }

    setCategory(category:CategoryEntity){
        this.categories.push(category);
    }

    getMovieName(){
        return this.movieName;
    }

    setMovieName(movieName:string){
        this.movieName = movieName;
    }

    getDuration(){
        return this.duration;
    }

    setDuration(duration:number){
        this.duration = duration;
    }

    getPrice(){
        return this.price;
    }

    setPrice(price:number){
        this.price = price;
    }

    getImages():ImageEntity[]{
        return this.images;
    }

    setImages(images:ImageEntity[]){
        this.images = images;
    }

}