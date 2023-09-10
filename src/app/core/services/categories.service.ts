import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { ResponseApi } from '../../shared/models/api/api-response.model';
import { CategoriesResponse } from '../../shared/models/categories/categories-response.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private apiService: ApiService) { }

  // No paginator is neccesary (yet)
  public getAllCategories(): Observable<ResponseApi<CategoriesResponse[]>> {
    return this.apiService.get(`categories`);
  }

}
