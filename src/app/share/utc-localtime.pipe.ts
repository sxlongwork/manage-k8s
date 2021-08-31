import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'toLocaltime'
})
export class UtcLocaltimePipe implements PipeTransform {

  transform(utctime: string): string {
    // let time = '2020-09-29T18:02:02.000Z'
      // time = this.formateDate(time);
      // console.log(form); // 2020-09-30 2:2:2
    // },
    // return null;
    if (utctime === ""){
      return ""
    }
    let timezone ='Asia/Shanghai'
    // return moment(utctime).utc().tz(timezone).format()
    return  moment.parseZone(utctime).local().format('YYYY-MM-DD HH:mm:ss');
  }

}
