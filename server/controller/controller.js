const fs = require('fs')
let data = {
    notes: require('../data/notes.json'),
    users: require('../data/users.json')
}
module.exports = {
	showIndex(ctx) {
		ctx.render("index.html")
	},
	getNotes(ctx) {
		if(ctx.params.type == "all"){
			//不分类，返回所有
			ctx.body = data.notes;
		}else {
			ctx.body = data.notes.filter(note => note.type == ctx.params.type)
		}
	},
	getNoteDetail(ctx) {
		let noteId = ctx.params.id;
		ctx.body = data.notes.find(note => note.id == noteId)
	},
	addNote(ctx) {
		console.log(ctx.request.body.content)
		let ctxData = ctx.request.body
		let {title, type, content} = ctxData
		let newNote = {
			title,
			type,
			content
		}
		//添加时间项
		let time = new Date();
		newNote.date = time.toDateString();
		if(data.notes.length == 0) {
			//如果原数组没有数据，新数据id设为1
			newNote.id = 1
		}else {
			newNote.id = data.notes[data.notes.length - 1].id +1
		}
		//新数据添加到notes数组里
		data.notes.push(newNote)
		//新的notes数组写入notes.json文件
		fs.writeFile("./data/notes.json", JSON.stringify(data.notes), err => {
			if(err) {
				console.log(err)
				//返回信息
				ctx.body = {"code": 1, "info": '添加失败'}
			}else {
				console.log('添加成功')
				//返回信息
				ctx.body = {"code": 0, "info": '写入成功'}
			}
		})
		// ctx.body = ctx.request;
	},
	loginTest(ctx) {
		let ctxUser = ctx.request.body
		if(data.users.find(user => user.username == ctxUser.username && user.password == ctxUser.password)){
			//返回信息
			ctx.body = {"code": 0, "info": '存在用户'}
		}else {
			//返回信息
			ctx.body = {"code": 1, "info": '不存在用户'}
		}
	},
	deleteNote(ctx) {
		let delId = ctx.params.noteId;
		//找到删除内容对应位置
		let index = data.notes.indexOf(data.notes.find(note => note.id == delId))
		//根据位置删除内容
		data.notes.splice(index, 1)
		//根据新的数据重写notes.json文件
		fs.writeFile("./data/notes.json", JSON.stringify(data.notes), err => {
			if(err) {
				//返回信息
				ctx.body = {"code": 1, "info": '写入失败'}
			}else {
				//返回信息
				ctx.body = {"code": 0, "info": '写入成功'}
			}
		})
		// ctx.body = {"code": 0}
	}
}