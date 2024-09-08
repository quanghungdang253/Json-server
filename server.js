const express = require('express');
const fs = require('fs');
const simpleGit = require('simple-git');
const app = express();
const port = 3000;

// Cấu hình express để parse JSON
app.use(express.json());

const git = simpleGit();

// Định nghĩa route để nhận dữ liệu từ client
app.post('/update', (req, res) => {
    const data = req.body.data;
    
    // Ghi dữ liệu vào file (hoặc cơ sở dữ liệu)
    fs.writeFile('data.txt', data, (err) => {
        if (err) {
            return res.status(500).send('Failed to save data.');
        }

        // Thực hiện commit và push các thay đổi lên GitHub
        git.add('data.txt')
           .commit('Update data from web form')
           .push(['origin', 'main'], () => {
               res.send('Data updated and pushed to GitHub.');
           });
    });
});

// Bắt đầu server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
