import { Injectable, Pipe, PipeTransform } from "@angular/core";
import { Icrick } from "../model/cricketer.interface";


@Pipe({
    name : 'filter'
})
export class FilterPipe implements PipeTransform{
    transform(arr : Array<Icrick>, searchVal : string, searchField : string) {
        if(!arr){
            return []
        }
        if(!searchVal){
            return arr
        }

        let filter = arr.filter(c => (c as any)[searchField]?.toString().toLowerCase().includes(searchVal.toLowerCase()));
        return filter
    }
}

