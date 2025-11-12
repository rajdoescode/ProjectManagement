import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";

/**
 const healthCheck = (req, res) => {
  try {
    res.status(200).json(
      new ApiResponse(200, {
        status: "success",
        message: "Server is running",
      }),
    );
  } catch (error) {
    res.status(500).json(new ApiError(500, "Something went wrong", error));
  }
};
 */

const healthCheck = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse(200, { message: "Server is running" }));
});

export { healthCheck };
