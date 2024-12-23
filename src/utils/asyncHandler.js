
const asyncHandler =async (requestHandler) => {
 (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).
    catch((err) => next(err));
 }
}

export default asyncHandler;




// const newAsync = (fn) => () {};
// const newAsync = (fn) => async() {};
// const newAsync = (fn) => async(req, res, next) {};

// const newAsync = (fn) => async (req, req, next) => {
//     try {
//         const result = await fn(req, req, next);
//         res.status(200).json(result);
//     } catch (error) {
//         res.status(err.code || 500).json({
//             message: error.message,
//             success: false,
//         })
        
//     }
// };