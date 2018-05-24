import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../interface/IBook';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(products: IBook[], ...args: any[]): any {
        const keyword = args[0];
        return products.filter(p => p.title.toLowerCase().includes(keyword.toLowerCase()));
    }
}