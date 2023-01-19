import { IAnyObject } from '@/types/common'

export function isEmptyO(obj: IAnyObject) {
  return !Object.keys(obj ?? {}).length
}
