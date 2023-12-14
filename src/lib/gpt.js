import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: "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",
  dangerouslyAllowBrowser: true,
});

const generateFacts = async (choice, number) => {
  const chatCompletion = openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "You are a helpful assistant designed to output JSON and label keys starting from 1.",
      },
      {
        role: "user",
        content: `Generate ${number} facts on ${choice}.Make sure the facts are not too short`,
      },
    ],
    model: "gpt-3.5-turbo-1106",
    response_format: { type: "json_object" },
  });
  const responseData = (await chatCompletion).choices[0].message.content;
  return JSON.parse(responseData);
};

export default generateFacts;
