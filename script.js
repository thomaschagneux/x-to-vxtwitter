function copyText() {
    var outputText = document.getElementById('outputText');
    var inputText = document.getElementById('textInput').value;

    // Transform the Twitter link
    var transformedText = transformTwitterLink(inputText);

    // Create a textarea element and set its value to the transformed text
    var textarea = document.createElement('textarea');
    textarea.value = transformedText;

    // Append the textarea element to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the textarea from the document
    document.body.removeChild(textarea);

    // Set the transformed text to the output textarea
    outputText.value = transformedText;
  }

  function transformTwitterLink(link) {
    // Replace "https://x.com/" with "https://vxtwitter.com/"
    return link.replace("https://x.com/", "https://vxtwitter.com/");
  }