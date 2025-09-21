import { Pipe, PipeTransform } from "@angular/core";
import { pipe } from "rxjs";

@Pipe({
    name : 'summary'
})
export class SummaryPipe implements PipeTransform{
    transform(value: string, limit : number = 50) {
        return value.slice(0, limit) + '...'
    }
}