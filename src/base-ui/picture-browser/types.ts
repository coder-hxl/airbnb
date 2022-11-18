import { IDivStyledComponent, IDivStyledProps } from '@/types/styled-component'

export interface IPictureBrowserProps {
  pictureUrls: string[]
  closeBtnClick: React.MouseEventHandler<HTMLDivElement>
}

interface ISCProps {
  isNext: boolean
  showList: boolean
}
export type IStyledComponent = IDivStyledComponent<ISCProps>
export type IStyledProps = IDivStyledProps<ISCProps>
