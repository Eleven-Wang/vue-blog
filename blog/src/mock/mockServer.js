import Mock from 'mockjs'
import apiData from './data.json'

Mock.mock('/goods', {code: 0, data: apiData.goods})