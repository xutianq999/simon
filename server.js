import express from 'express';
import multer from 'multer';
import cors from 'cors';
import { TosClient } from '@volcengine/tos-sdk';
import { writeFileSync, unlinkSync } from 'fs';

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// 创建客户端
const client = new TosClient({
    accessKeyId: process.env['TOS_ACCESS_KEY'],
    accessKeySecret: process.env['TOS_SECRET_KEY'],
    region: "cn-beijing",
});

// 启用 CORS
app.use(cors());

// 文件上传接口
app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: '没有上传文件' });
        }

        const objectName = `images/${Date.now()}-${req.file.originalname}`;
        
        // 直接使用文件的 buffer 上传
        await client.putObject({
            bucket: 'openducket',
            key: objectName,
            body: req.file.buffer,
            acl: 'public-read'
        });

        // 构建并返回图片的URL
        const imageUrl = `https://openducket.tos-cn-beijing.volces.com/${objectName}`;
        console.log(`Image uploaded successfully. URL: ${imageUrl}`);

        res.json({ 
            success: true, 
            imageUrl: imageUrl 
        });

    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 