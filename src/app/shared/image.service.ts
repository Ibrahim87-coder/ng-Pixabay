import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 import{map} from 'rxjs/operators';
@Injectable() 
export class ImageService{
    private query:string;
    private API_KEY:string = environment.PIXABAY_API_KEY;
    private API_URL:string = environment.PIXABAY_API_URL;
    private URL:string= this.API_URL + this.API_KEY + '&q=';
    private perPage:string= "&per_page=10";

    constructor(private _http:HttpClient){

    }

    getImage(query){

        return this._http.get(this.URL+query+this.perPage)
        .pipe(map(res=>res));
    }


}