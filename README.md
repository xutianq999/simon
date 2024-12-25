# real_time_ai_console
real_time_ai_console


[![GitHub issues](https://img.shields.io/github/issues/yourusername/real_time_ai_console)](https://github.com/yourusername/real_time_ai_console/issues)
[![GitHub license](https://img.shields.io/github/license/yourusername/real_time_ai_console)](https://github.com/yourusername/real_time_ai_console/blob/master/LICENSE)

## 项目简介

`Real-Time AI Console` 是一款用于实现AI实时通话的应用程序，用户可以通过Web界面选择麦克风和摄像头设备，并与远程服务器交互来完成语音识别、图像分析等任务。此外，还支持自动拍照上传图片至服务器进行进一步处理。

## 功能特性

- **设备选择**：用户可以从多个麦克风和摄像头中选择一个用于通话。
- **音量指示**：实时显示当前麦克风输入的音量大小。
- **摄像头预览**：提供本地摄像头视频流预览窗口。
- **自动拍照**：定时从摄像头捕获图像帧并上传到服务器。
- **图像解析**：上传图片后可调用API接口对图片内容进行解析。
- **语音识别**：捕捉用户的语音并通过WebSocket发送给服务器进行识别。
- **语音合成**：将AI的回答转换为语音播放给用户。

## 技术栈

- **前端**：HTML5, CSS3, JavaScript (ES6+), WebRTC, WebSocket
- **第三方库**：CryptoJS for encryption
- **后端服务**：需自行搭建或使用提供的API服务（如 [Coze API](https://api.coze.cn)）

## 快速开始

1. **克隆仓库**

   ```bash
   git clone https://github.com/yourusername/real_time_ai_console.git
   cd real_time_ai_console


2. **安装依赖** 如果有npm包或其他依赖项，请按照package.json中的说明安装。
3. **配置环境变量** 修改config.js文件中的API密钥和其他必要的配置参数。
4. **启动应用** 打开index.html文件即可在本地环境中体验完整功能。
5. **部署上线**  根据具体需求部署到相应的服务器上。
 
