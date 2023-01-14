import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {
  CheckCircleFilled,
  CloseCircleFilled,
  InfoCircleFilled
} from '@ant-design/icons'
import { CSSTransition } from 'react-transition-group'

import { RootState } from '@/store'
import { closeFeedbackAction } from '@/store/modules/feedback'

import FeedbackWrapper from './types'

const Feedback = memo(() => {
  const dispatch = useDispatch()
  const { isShow, type, content, timeout } = useSelector(
    (state: RootState) => ({
      isShow: state.feedback.isShow,
      type: state.feedback.type,
      content: state.feedback.content,
      timeout: state.feedback.timeout
    }),
    shallowEqual
  )

  useEffect(() => {
    if (isShow) {
      setTimeout(() => {
        dispatch(closeFeedbackAction())
      }, timeout)
    }
  }, [dispatch, isShow, timeout])

  return (
    <FeedbackWrapper>
      {isShow && (
        <CSSTransition classNames="popup" timeout={500} in={isShow} appear>
          <div className="feedback-box">
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
      )}
    </FeedbackWrapper>
  )
})

export default Feedback
