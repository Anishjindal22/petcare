const Doctor = require("../models/DoctorSchema")

// function to create new doctor
exports.createDoctor = async(req,res,next) =>{
   try {
    const {firstName,lastName,email,contactNumber,experience} = req.body;

    if(!firstName ||
       !lastName ||
       !email || 
       !contactNumber ||
       ! experience){
        return res.status(401).json({
            success:false,
            message:"All fields are required"
        })
       }

       const existingUser = await Doctor.findOne({email})

       if(existingUser){
        return res.status(402).json({
            success:false,
            message:"Doctor already exists"
        })
       }

       const newDoctor = await Doctor.create({
        firstName,
        lastName,
        email,
        contactNumber,
        experience
       })

      return res.status(200).json({
        success:true,
        message:"doctor created successfully",
        newDoctor
      })
   } catch (error) {
    return res.status(403).json({
        success:false,
        message:"Internal server error please try again later"
    })
   }
} 




// get all doctors 
exports.getAlldoctors = async(req,res) =>{
    const doctors = await Doctor.find();
    return res.status(200).json({
        success:true,
        message:"All doctors fetched successfully",
        doctors
    })
}

// update doctors <---admin route only--- >

exports.updatedoctor = async(req,res,next) => {
    try {
        let doctor = await  Doctor.findById(req.params.id);

        if(!doctor){
            return res.status(401).JSON({
                success:false,
                message:"doctor not found"
            })
        }

        doctor = await Doctor.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true,
            useFindAndModify:false
        })

        return res.status(200).json({
            success:true,
            doctor
        })
    } catch (error) {
        return res.status(403).json({
            success:false,
            message:"Internal server error cannot update doctor please try again later "
        })
    }
}


// to delete Doctor <---admin route only--- >
exports.deleteDoctor = async (req,res,next) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if(!doctor){
            return res.status(402).json({
                success:false,
                message:"doctor not found"
            })
        }
        await Doctor.deleteOne();
        return res.status(200).json({
            success:true,
            message:"doctor deleted succesfully"
        })
    } catch (error) {
        return res.status(403).json({
            success:false,
            message:"Internal server error not able to delete the doctor please try again later"
        })
    }
}


// get doctor details 
exports.getdoctorDetails = async(req,res,next) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if(!doctor){
            return res.status(402).json({
                success:false,
                message:"doctor not found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"doctor details fetched successfully",
            doctor
        })
    } catch (error) {
        return res.status(502).json({
            success:false,
            message:"Internal server error cannot get doctor details please try again later"
        })      
    }
}