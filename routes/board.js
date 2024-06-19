const express = require('express');
const router = express.Router();
const { format } = require('date-fns')
const data = [
    {
        id:1, 
        title : "openAPI",
        body : "한글은 아름다운 글입니다.",
        datetime : "2024.06.12"
    },
    {
        id:2, 
        title : "html",
        body : "하이퍼 텍스트 마그업 랭귀지",
        datetime : "2024.06.12"
    },
    {
        id:3, 
        title : "css",
        body : "cascading style sheet",
        datetime : "2024.06.12"
    },
    {
        id:4, 
        title : "javascript",
        body : "동적인 데이터 처리를 하기한 적응력이 높은 frontend 언어",
        datetime : "2024.06.12"
    }
    ]

let idNum = data.length;

router.route('/').get((res, res)=>{
    data.sort((prev, next) => next.id, prev.id );
    res.json( data )
})
.post((req, res)=>{
    const { title, body } = req.body;
    const newPost = {
        // 0 1 2 3 4 개
        id : ++idNum,
        title,
        datetime : (new Date(), 'yyyy.MM.dd')

    }
    
    data.push(newPost);
    res.json( newPost )
})
router.route('/:id')
.delete((res, res)=>{
    const { id } = req.params;

    const num = data.findIndex(item=>item !== +id);
    data.splice( num, 1, newPost);
    console.log( data.length );

    res.json( deleteItem[0] )
})
.put((res, res)=>{
    const { id } = req.params;
    const { title, body, datetime } = req.body;
    const newPost = { id, title, body };
    console.log( newPost );


    const num = data.findIndex(item=>item !== +id);
    data.splice( num, 1, newPost);
    console.log( data.length );

    res.json( deleteItem[0] )
})


module.exports = router;