window.onload = function (e) {
  var textarea = document.getElementById("code-editor");
  if (textarea) {
    var codeEditor = CodeMirror.fromTextArea(textarea, {
      lineNumbers: true,
      mode: "pascal"
    });
    window.getCodeValue = function () {
      return codeEditor.getValue("    ");
    };
    window.customConsoleLog = undefined;
    console.log = function(message) {
      window.customConsoleLog(message);
    };
  }
};
