import xLRequest from '..'

import { IRoomData } from '@/store/modules/entire/types'

export function getEntireRoomList(offset = 20, size = 20) {
  return xLRequest.get<IRoomData>({
    url: '/entire/list',
    params: { offset, size },
  })
}
