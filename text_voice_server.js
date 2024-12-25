import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();

// 启用 CORS 和 JSON 解析
app.use(cors());
app.use(express.json());

// 语音合成接口
app.post('/synthesize', async (req, res) => {
    try {
        const { input, voice = 'alloy' } = req.body;

        if (!input) {
            return res.status(400).json({
                success: false,
                error: '缺少必要的文本内容'
            });
        }

        // 调用语音合成 API
        const response = await fetch('https://xiaoai.plus/v1/audio/speech', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer xxxxxxxxxxx',  // 替换为你的实际 API key
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'tts-1',
                input: input,
                voice: voice
            })
        });

        if (!response.ok) {
            throw new Error(`语音合成请求失败: ${response.status}`);
        }

        // 获取音频数据
        const audioBuffer = await response.buffer();

        // 设置响应头
        res.set({
            'Content-Type': 'audio/mpeg',
            'Content-Length': audioBuffer.length
        });

        // 发送音频数据
        res.send(audioBuffer);

    } catch (error) {
        console.error('语音合成错误:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

// 健康检查接口
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`语音合成服务运行在端口 ${PORT}`);
});
