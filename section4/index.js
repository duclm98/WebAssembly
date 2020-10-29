const express = require('express')
const app = express()

// Serve static files from /public
app.use(express.static('public', {
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.wasm')) {
            // res.set('Content-type', 'application/wasm')
        }
    }
}))

// Start server
app.listen(3000, () => console.log('Server running on port 3000!'))