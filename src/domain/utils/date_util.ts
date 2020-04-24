import moment from 'moment';

export const DATE_FORMAT = 'DD/MM/YYYY'

export default class DateUtil {
    static formatDate(date: Date, format?: string): string {
        if (format) return moment(date).format(format)
        else return moment(date).format(DATE_FORMAT)
    }


}