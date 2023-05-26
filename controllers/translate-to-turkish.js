const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const translateToTurkish = async (req, res) => {
  // input prompt coming from client
  const userPrompt = req.body.text;
  const editedPrompt = `Translate this English text into Turkish: ${userPrompt}`;
  try {
    // Title
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{role: "user", content: editedPrompt}],
    });

    const aiOutput = response.data.choices[0].message.content;

    res.status(200).json({
      success: true,
      data: aiOutput,
    });
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }

    res.status(400).json({
      success: false,
      error: 'Prompt cannot be generated',
    });
  }
};

module.exports = { translateToTurkish };