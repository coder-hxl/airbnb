import xLRequest from '..'

import { IRoomInfo } from '@/store/modules/room/types'

export function getRoomData(roomId: string) {
  return xLRequest.get<IRoomInfo>({ url: `/room/${roomId}` })
}
