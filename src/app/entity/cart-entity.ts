import { MovieEntity } from 'src/app/entity/movie-entity';
export class CartEntity{
    id:number;
    movie:MovieEntity;

    constructor(id:number, movie:MovieEntity){
        this.id = id;
        this.movie = movie;
    }

    public getId():number{
        return this.id;
    }

    public getMovie():MovieEntity{
        return this.movie;
    }

    public setMovie(movie:MovieEntity):void{
        this.movie = movie;
    }
}