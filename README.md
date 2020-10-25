# express-hls-example

Express와 HLS로 동영상을 스트리밍하는 예제입니다.

This is an example that stream video using HLS and Node.js

## 참조

예제에 대해 설명한 블로그 글 주소입니다.

The links below are my blog posts that explain about this example.

[한국어](https://medium.com/@HoseungJang/node-js-express-hls%EB%A1%9C-%EB%8F%99%EC%98%81%EC%83%81-%EC%8A%A4%ED%8A%B8%EB%A6%AC%EB%B0%8D%ED%95%98%EA%B8%B0-46006408a0e6)

[English](https://medium.com/@HoseungJang/video-streaming-with-node-js-9401213a04e7)

## 시작하기

저장소를 클론해주세요.

Clone this repository.

```
git clone https://github.com/HoseungJang/express-hls-example.git
```

의존성을 설치해주세요.

Install dependencies.

```
cd express-hls-example
npm install
```

src 디렉토리로 이동해주세요.

Go to 'src' directory.

```
cd src
```

videos 디렉토리를 생성한 후 mp4 형식의 동영상을 넣어주세요.

동영상 파일의 이름은 video로 해주세요.

여기까지 오셨다면 src 디렉토리 내부가 아래와 같을 것입니다.

After making 'videos' directory, Put 'video.mp4' file into there.

If you complete this step, 'videos' directory is composed of:

```
/src
	/videos
		video.mp4
	app.js
	client.html
	ffmpeg.js
```



ffmpeg.js를 실행해주세요.

Run ffmpeg.js.

```
node ffmpeg.js
```

end가 출력되면 ffmpeg.js를 종료하고 app.js를 실행해주세요.

Terminate ffmpeg.js and Run app.js when 'end' is logged.

```
node app.js
```



localhost:3000으로 접속하고, 동영상을 재생해보세요.

F12를 누르고 Network 탭도 확인해보세요.

Now go to localhost:3000 and play your video.

Press F12 key and check the Network tab.
