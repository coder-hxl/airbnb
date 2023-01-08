import xLRequest from '..'

import { IRoomInfo, IReview } from '@/store/modules/room/types'

export function getRoomData(roomId: string) {
  return xLRequest.get<IRoomInfo>({ url: `/room/${roomId}` })
}

export function getReviewData(roomId: number, offset: number, size: number) {
  return xLRequest.post<IReview>({
    url: '/room/review',
    data: {
      roomId,
      offset,
      size
    }
  })
}
