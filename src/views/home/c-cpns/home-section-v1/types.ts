import { IHomeRoom } from '@/store/modules/home/types'

interface IInofData {
  title?: string
  subtitle?: string | null
  list: IHomeRoom[]
}

export interface IProps {
  infoData: IInofData
}
