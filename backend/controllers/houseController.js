export const generateHouse = (req, res) => {
  const { prompt } = req.body;

  res.json({
    success: true,
    message: "Prompt received successfully",
    prompt,
  });
};