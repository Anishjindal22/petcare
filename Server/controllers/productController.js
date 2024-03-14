const Product = require("../models/ProductSchema")


// function to create new product <---admin route only--- >
exports.createNewProduct = async (req,res) => {
    try {
        const {name, description, image,category,stock,price } = req.body

        if(!name ||
           !description || 
           !image ||
           !category ||
           !stock ||
           !price){
            return res.status(500).json({
                success:false,
                message:"All fields are required"
            })
           }

           const newProduct = await Product.create({
            name,
            description,
            image,
            category,
            stock,
            price
           })

           return res.status(200).json({
            success:true,
            message:"Product created successfully",
            newProduct
           })

    } catch (error) {
        return res.status(401).json({
            success:false,
            message:"Internal server error please try again later"
        })
    }
}



// get all products 
exports.getAllProducts = async(req,res) =>{
    const Products = await Product.find();
    if(!Products){
        return res.status(404).json({
            success:false,
            message:"Product not found"
        })
    }

    return res.status(200).json({
        success:true,
        message:"All products fetched successfully",
        Products
    })
}

// update products <---admin route only--- >

exports.updateProduct = async(req,res,next) => {
    try {
        let product = await  Product.findById(req.params.id);

        if(!product){
            return res.status(401).JSON({
                success:false,
                message:"Product not found"
            })
        }

        product = await Product.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true,
            useFindAndModify:false
        })

        return res.status(200).json({
            success:true,
            product
        })
    } catch (error) {
        return res.status(403).json({
            success:false,
            message:"Internal server error cannot update product please try again later "
        })
    }
}


// to delete product <---admin route only--- >
exports.deleteProduct = async (req,res,next) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(402).json({
                success:false,
                message:"Product not found"
            })
        }
        await product.deleteOne();
        return res.status(200).json({
            success:true,
            message:"Product deleted succesfully"
        })
    } catch (error) {
        return res.status(403).json({
            success:false,
            message:"Internal server error not able to delete the product please try again later"
        })
    }
}


// get product details 
exports.getProductDetails = async(req,res,next) => {
    try {
        const product = await Product.findById(req.params.id);
        if(!product){
            return res.status(402).json({
                success:false,
                message:"Product not found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"product details fetched successfully",
            product
        })
    } catch (error) {
        return res.status(502).json({
            success:false,
            message:"Internal server error cannot get product details please try again later"
        })      
    }
}