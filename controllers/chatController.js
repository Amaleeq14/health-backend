exports.chatReply = (req, res) => {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }
  
    // Fake AI response
    const response = `AI Response to: "${message}"`;
    res.status(200).json({ reply: response });
  };
  