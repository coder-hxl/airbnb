import dayjs from 'dayjs'

export function fullTimeFormat(time: any) {
  return dayjs(time).format('YYYY年MM月DD日 HH:MM')
}
