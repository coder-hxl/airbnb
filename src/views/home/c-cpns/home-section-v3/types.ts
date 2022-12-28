import { IHomeRoom } from '@/store/modules/home/types'

interface IInfoData {
  title?: string
  subtitle?: string
  list?: IHomeRoom[]
}

export interface IProps {
  infoData: IInfoData
}
