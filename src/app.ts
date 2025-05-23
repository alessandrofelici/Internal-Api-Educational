const express = require('express')
const app = express()
const port = 3000

// TODO find out what types these should actually be
app.get('/', (req: any, res: any) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
