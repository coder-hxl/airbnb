import React, { memo, useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  CheckCircleFilled,
  CloseCircleFilled,
  InfoCircleFilled
} from '@ant-design/icons'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import { RootState } from '@/store'
import { closeFeedbackAction } from '@/store/modules/feedback'

import FeedbackWrapper from './types'

const Feedback = memo(() => {
  const dispatch = useDispatch()
  const { isShow, timeout, queue } = useSelector(
    (state: RootState) => ({
      isShow: state.feedback.isShow,
      timeout: state.feedback.timeout,
      queue: state.feedback.queue
    }),
    shallowEqual
  )
  const [sumLength, setSumLength] = useState(queue.length)

  useEffect(() => {
    if (queue.length > sumLength) {
      setSumLength(sumLength + 1)
      setTimeout(() => {
        dispatch(closeFeedbackAction())
      }, timeout)
    } else {
      setSumLength(sumLength - 1)
    }
  }, [dispatch, timeout, setSumLength, queue.length])

  return (
    <FeedbackWrapper>
      {isShow && (
        <TransitionGroup className="box">
          {queue.map(({ id, type, content }) => {
            return (
              <CSSTransition
                key={id}
                classNames="popup"
                timeout={500}
                in={isShow}
                appear
              >
                <div className="item">
                  <div className="icon">
                    {type === 'success' ? (
                      <CheckCircleFilled style={{ color: '#52c41a' }} />
                    ) : type === 'error' ? (
                      <CloseCircleFilled style={{ color: '#ff4d4f' }} />
                    ) : (
                      <InfoCircleFilled style={{ color: '#faad14' }} />
                    )}
                  </div>
                  <div className="content">{content}</div>
                </div>
              </CSSTransition>
            )
          })}
        </TransitionGroup>
      )}
    </FeedbackWrapper>
  )
})

export default Feedback
