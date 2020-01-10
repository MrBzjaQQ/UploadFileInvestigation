var xhr = new XMLHttpRequest();
function upload(file) {
  const {log} = console;

  // обработчик для отправки
  xhr.upload.onprogress = function(event) {
    log(event.loaded*100/event.total+'%');
  }

  // обработчики успеха и ошибки
  // если status == 200, то это успех, иначе ошибка
  xhr.onload = xhr.onerror = function() {
    if (this.status == 200) {
      log("success");
    } else {
      log("error " + this.status);
    }
  };

  xhr.open("POST", "upload", true);
  xhr.send(file);

}

function stop() {
    xhr.abort();
}