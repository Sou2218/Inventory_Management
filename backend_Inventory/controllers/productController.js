import productModel from "../models/product.model.js";

productModel

export const getProducts = async (req,res) =>{
    try {
       const products = await productModel.find().sort({createdAt : -1}) || [];
       res.status(200).json({success:true,data : products})
    } catch (error) {
        console.log("Error fetching product data", data.message)
        res.status(500).json({success:false,message: "something went wrong"})
    }
}

// GET /api/products/:id
export const getProductbyId = async (req, res) => {
  try {
    const getProducts = await productModel.findById(req.params.id);
    if (!getProducts) return res.status(404).json({ success: false, message: "Product not found" });
    res.status(200).json({ success: true, data: getProducts  });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error fetching product" });
  }
};


export const createProduct = async (req,res) =>{
    try {
        const createproduct = new productModel(req.body);
        await createproduct.save();
        res.status(200).json({success:true,data:createproduct})
    } catch (error) {
        console.log("Error in creating candidate data:",error.message)
        res.status(500).json({success:false,message:"Something went wrong"})
    }
}

export const updateProduct = async (req,res) =>{
    try {
        const updateproduct = await productModel.findByIdAndUpdate(req.params.id, req.body,{new : true})
        res.status(200).json({success : true,data:updateproduct})
    } catch (error) {
        console.log("Error updating candidate data", error.message)
        res.status(500).json({success:false,message: "something went wrong"})
    }
}

export const deleteProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    console.log("Error deleting product data:", error.message);
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

