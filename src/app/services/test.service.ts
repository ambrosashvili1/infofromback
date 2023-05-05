import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../environments/environment.prod";

@Injectable({
    providedIn : "root",
})

export class TestService {
    constructor(private http : HttpClient) {

    }
    getAllUsers(): Observable<any> {
        return this.http.get<any>(`${environment.apiBaseUrl}`)
    }

    // getSingleUser() {
    //     this.http.get(`${environment.apiBaseUrl}`)
    // }
}