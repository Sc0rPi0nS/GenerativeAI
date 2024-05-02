//code ปุ่ม
function fetchDataAJax() {
  const inputText = document.getElementById("input").value;
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = "รอแปปนะหลานลุง";
  //ตัวดึงคำตอบมาแสดง + API
  $.ajax({
    url: "https://api.openai.com/v1/chat/completions",
    type: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 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",
    },
    data: JSON.stringify({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content:
            "you are my uncle, who live in nakhon si thammarat. you like helping brokenhearted people. You will always curse others first and console them later. and you end your sentences with 'นี่แหละชีวิต' each time",
        },
        {
          role: "user",
          content: inputText,
        },
      ],
      temperature: 0.7,
      max_tokens: 100,
      top_p: 1,
    }),
    success: function (data) {
      outputElement.innerHTML = data.choices[0].message.content;
    },
    error: function (error) {
      console.error("Error:", error);
    },
  });
}
