const sendResponse = (res, statusCode, data) => {
  console.log("data : ", data);
  if (data !== undefined && data !== null) {
    if (data.length > 1) {
      res.status(statusCode).json({
        status: "success",
        results: data.length,
        data,
      });
    }

    res.status(statusCode).json({
      status: "success",
      data,
    });
  } else {
    res.status(statusCode).json({
      status: "success",
    });
  }
};

export default sendResponse;
