import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pesquisarTexto',
  pure: false
})
export class PesquisarTextoPipe implements PipeTransform {

  constructor() { }

  transform(value: any, query: string, field: string): any {
      return query ? value.reduce((prev:any, next:any) => {
        if (next[field].includes(query)) { prev.push(next); }
        return prev;
      }, []) : value;
    }
}