const Router = require('koa-router')
const router = new Router()
const controller = require('../controller/controller')

router.get('/', controller.showIndex)

//获取notes列表（根据分类
router.get('/notes/:type', controller.getNotes)

//返回对应note详细内容
router.get('/note/:id', controller.getNoteDetail)

//添加新的note数据到notes.json
router.post('/addNote', controller.addNote)

//登录认证
router.post('/login', controller.loginTest)

//删除内容
router.delete('/note/:noteId', controller.deleteNote)

module.exports = router;