const app = require('express')();
const fs = require('fs');
const hls = require('hls-server');

app.get('/', (req, res) => {
    return res.status(200).sendFile(`${__dirname}/client.html`);
});

const server = app.listen(3000);

new hls(server, {
    provider: {
        exists: (req, cb) => { // 모든 요청에 대해 실행됩니다. 응답하기 전 파일의 존재 유무를 확인합니다.
            const ext = req.url.split('.').pop();

            if (ext !== 'm3u8' && ext !== 'ts') {
                // cb의 두 번째 인자에 true를 넘기는건 파일이 존재한다는 의미입니다.
                // .m3u8, .ts 이외의 파일 형식은 hls server가 아닌 express router가 관리하므로 true로 처리합니다.
                return cb(null, true);
            }

            fs.access(__dirname + req.url, fs.constants.F_OK, function (err) {
                if (err) {
                    console.log('File not exist');
                    // 파일이 존재하지 않으므로 false를 넘겨줍니다.
                    return cb(null, false);
                }
                cb(null, true);
            });
        },
        getManifestStream: (req, cb) => { // .m3u8 파일의 요청에 대해 실행됩니다.
            const stream = fs.createReadStream(__dirname + req.url);
            cb(null, stream);
        },
        getSegmentStream: (req, cb) => { // .ts 파일의 요청에 대해 실행됩니다.
            const stream = fs.createReadStream(__dirname + req.url);
            cb(null, stream);
        }
    }
});