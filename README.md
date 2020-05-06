# express-hls-example

Express와 HLS로 동영상을 스트리밍하는 예제입니다.

## 시작하기

저장소를 클론해주세요.

```
git clone https://github.com/HoseungJang/express-hls-example.git
```

의존성을 설치해주세요.

```
cd express-hls-example
npm install
```

src 디렉토리로 이동해주세요.

```
cd src
```

videos 디렉토리를 생성한 후 mp4 형식의 동영상을 넣어주세요.
동영상 파일의 이름은 video로 해주세요.

여기까지 오셨다면 src 디렉토리 내부가 아래와 같을 것입니다.

```
/src
	/videos
		video.mp4
	app.js
	client.html
	ffmpeg.js
```

ffmpeg.js를 실행해주세요.

```
node ffmpeg.js
```

end가 출력되면 ffmpeg.js를 종료하고 app.js를 실행해주세요.

```
node app.js
```

localhost:3000으로 접속하고, 동영상을 재생해보세요.

F12를 누르고 Network 탭도 확인해보세요.