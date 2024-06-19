const express = require('express');
const app = express();
const logEvents = require('./middleware/logEvents'); 
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config(); 

/* 포트 설정 */
app.set('port', process.env.PORT || 3000);

app.use(cors());
/* 공통 미들웨어 */ 
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // qs, queryString

app.use((req, res, next)=>{
    console.log( Date.now(), req.method, req.url );
    logEvents(`${req.method}, ${req.url}`)
    // logger 삽입
    next();
})

// // 필요한 데이터로 변경하여 사용 
// app.get('/user', (req, res) => { 
//     res.send('user')
// });
 
// localhost:4500/makeup

app.use('/users', require('./routes/makeup')); 
app.use('/board', require('./routes/board')); 
 
// 그외의 라우트 처리 
app.use('/*', (req, res) => { 
    res.status(500).send('404'); 
});
 
app.use((err, req, res, next)=>{
    console.error( err.message );
    res.send('잠시 후 다시 접속해주세요')
})

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행 중 ..')
});