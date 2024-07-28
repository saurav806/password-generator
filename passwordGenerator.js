const inputRangeElement = document.getElementById("range");
const generateButton = document.getElementById("generate-password");
const resultElement = document.getElementById("result");
const copyPasswordButton = document.getElementById("copy-password");

inputRangeElement.addEventListener("input", () => {
  const updateSliderValue = document.getElementById("range-value");
  updateSliderValue.innerText = inputRangeElement.value;
  copyButton.innerText = "Copy Password";
  resultElement.innerText = null;
});

const generatePassword = () => {
  const passwordLength = inputRangeElement.value;

  const selectedOptions = {
    numbers: document.querySelector('input[value="numbers"]:checked') !== null,
    letters: document.querySelector('input[value="letters"]:checked') !== null,
    mixedCase:
      document.querySelector('input[value="mixedCase"]:checked') !== null,
    punctuation:
      document.querySelector('input[value="punctuation"]:checked') !== null,
  };

  console.log(selectedOptions.numbers);

  let characterSet = "";
  if (selectedOptions.numbers) characterSet += "0123456789";
  if (selectedOptions.letters) characterSet += "abcdefghijklmnopqrstuvwxyz";
  if (selectedOptions.mixedCase) characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (selectedOptions.punctuation) characterSet += "!@#$%^&*()_+[]{}|;:,.<>?";

  if (characterSet === "") {
    resultElement.innerText = "Please select one option atleast.";
    return;
  }

  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  resultElement.innerText = password;
};

const copyPassword = () => {
    var copyText = document.getElementById("result");
    navigator.clipboard.writeText(copyText.innerText);
    copyText.innerText 
        ? alert("Copied the text: " + copyText.innerText)
        : alert("No text is there");
}

generateButton.addEventListener("click", generatePassword);
copyPasswordButton.addEventListener("click", copyPassword);

