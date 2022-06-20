import app from './app'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.join(__dirname, '../../.env') })

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server is listenning on port ${PORT}`);
})