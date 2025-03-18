const asyncHandler=(reqesthandler)=>{
    (req,res,next)=>{
Promise.resolve(reqesthandler(req,res,next)).catch((err)=>next(err))
    }
}

export { asyncHandler }