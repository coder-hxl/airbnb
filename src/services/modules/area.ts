import xLRequest from '..'

import { IRoomData } from '@/store/modules/area/types'

export function getAreaRoomList(
  areaName: string,
  type: string,
  offset = 20,
  size = 20
) {
  return xLRequest.post<IRoomData>({
    url: `/area/${areaName}`,
    data: { type, offset, size }
  })
}
