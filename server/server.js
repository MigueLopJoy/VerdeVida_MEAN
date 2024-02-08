express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),

    app = express(),
    PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/catalogdb', { useNewUrlParser: true, useUnifiedTopology: true })

const Product = mongoose.model('Product', {
    name: String,
    description: String,
    price: Number,
    image: String
})

mongoose.connection.once('open', async () => {
    try {
        const db = mongoose.connection.db,
            collectionExists = await db.listCollections({ name: 'products' }).hasNext()

        if (!collectionExists) {
            await db.createCollection('products')

            const sampleProducts = [
                { name: 'Manzanas', description: 'Manzanas ecológicas de cercanía. Las mejores manzanas del mercado.', price: 2.99, image: 'producto-manzana.jpg' },
                { name: 'Naranjas', description: 'Naranjas ecológicas de cercanía. Las mejores naranjas del mercado.', price: 3.99, image: 'producto-naranja.jpg' },
                { name: 'Peras', description: 'Peras ecológicas de cercanía. Las mejores peras del mercado.', price: 1.99, image: 'producto-pera.jpg' },
                { name: 'Plátanos', description: 'Plátanos ecológicos de cercanía. Los mejores plátanos del mercado.', price: 4.99, image: 'producto-platano.jpg' },
                { name: 'Piña', description: 'Piñas ecológicas de cercanía. Las mejores piñas del mercado.', price: 10.99, image: 'producto-piña.jpg' }
            ]

            await Product.insertMany(sampleProducts)
        } else {
            console.log('Collection "products" already exists.')
        }
    } catch (error) {
        console.error('Error during database setup:', error.message)
    }
})

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
