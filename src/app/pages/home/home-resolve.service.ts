import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/internal/operators';
import { Namespace } from 'src/app/services/data-types';
import { NamespaceService } from 'src/app/services/namespace.service';

// type HomeDataType = [Banner[], HotTag[], SongSheet[], Singer[]];

@Injectable()
export class HomeResolverService implements Resolve<Namespace[]> {
  constructor(
    private nsService: NamespaceService,
  ) {}
  resolve(): Observable<Namespace[]> {
    return this.nsService.getNamespace().pipe(first());
  }

}
