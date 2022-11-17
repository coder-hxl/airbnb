import { createSlice } from '@reduxjs/toolkit'

import { IAction } from '@/store/types'
import { IState, IDetailRoomInfo } from './types'

const initialState: IState = {
  detailInfo: {
    _id: '63043046432f9033d45410dd',
    id: '44501166',
    picture_url:
      'https://z1.muscache.cn/im/pictures/205f9323-ff95-4881-9cdf-8640da95035b.jpg?aki_policy=large',
    picture_urls: [
      'https://z1.muscache.cn/im/pictures/205f9323-ff95-4881-9cdf-8640da95035b.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/d34ab35b-14f7-4fa3-9b05-e4c68e982ced.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/28102836-5f34-4385-907b-d0874aac1a89.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/52823d6c-5067-4e5c-9c51-c14dfcdf72c0.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/f15c8bbc-f1f6-4a69-b8f2-0b32ca987438.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/f794c5be-d2a3-4734-8f68-f36b7728328d.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/9912ab53-6ea2-4108-90c1-89d0662cfa7c.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/23675f25-43d9-402b-b056-860c75df5803.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/b0b16961-dc6e-48aa-ba88-27d7e40229b0.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/ea884c1f-52ab-4731-b9c8-535fd9faecca.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/fa01288f-4dde-4738-a8a7-5b8179ea6eeb.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/f1da5348-8f16-48a2-9c6f-b4c52f0a488b.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/d4c1c453-7a32-4ce2-8e85-6cb913b447ed.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/00fb9994-d339-4a85-9723-1cea89cd5522.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/57a21f93-8078-49a4-ada4-abe1fd683a55.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/dce0c117-3f22-44ca-a4dc-e8de8618b4b8.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/e83431b8-54f9-43f2-80d9-a5539811029b.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/2bfb0f89-49e8-4af4-854d-3c019895e11f.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/b3f46a2d-4913-456d-afef-f0c579adcc17.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/7d29172e-aecf-4817-8257-820290ae3249.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/70792aad-5f95-412f-9023-9cc985d3dc24.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/c42769f4-9cb7-45d5-b034-1adfa0c6278e.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/ce0df85e-b378-46ab-bee7-3f6cb3520f2c.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/e31011c6-1f5b-4600-b5fc-57ff586c0d7e.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/51451c47-9f1b-4813-8bcb-2bf6de135c1e.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/5367bb14-e95a-407c-b022-28f0fd7f19d2.jpg?aki_policy=large',
      'https://z1.muscache.cn/im/pictures/4f3953cd-c1bb-4b92-8ed4-a12e06c532b5.jpg?aki_policy=large',
    ],
    verify_info: {
      messages: ['整套loft', '3室2卫4床'],
      text_color: '#767676',
    },
    name: '地铁口/长隆景区附近/可投屏/麻将机/ins北欧风/复式独立三房两卫',
    price: 755,
    price_format: '￥755',
    star_rating: 5,
    star_rating_color: '#FF5A5F',
    reviews_count: 51,
    reviews: [
      {
        comments:
          '房间很干净，很舒适。就在地铁口，交通很方便，而且周边有商城、超市、美食街，也很近长隆景区。很赞。',
        created_at: '2022-02-15T00:00:00Z',
        is_translated: false,
        localized_date: '2022年2月',
        reviewer_image_url:
          'https://a0.muscache.com/im/pictures/user/f2f25ba7-a6a8-4a81-9379-69fd66d89dad.jpg?aki_policy=x_medium',
        review_id: 562428563394985200,
      },
    ],
    bottom_info: null,
    lat: 22.99029,
    lng: 113.3363,
    image_url: '/moreitems/f6693c3015ce910b71c1e75c98bcd64f.jpg',
  },
}

const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    changeDetailInfoAction(state, { payload }: IAction<IDetailRoomInfo>) {
      state.detailInfo = payload
    },
  },
})

export const { changeDetailInfoAction } = detailSlice.actions
export default detailSlice.reducer
