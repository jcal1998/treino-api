const onChange = event => {
  let fileInput = document.getElementById('fileupload').files[0];
  if(fileInput){
    uploaded.src = URL.createObjectURL(fileInput)
  }else{
    uploaded.src = '#'
  }
}

const submitFormAjax = async (event) => {
  document.getElementById("inn").innerHTML = "";
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var mail = document.getElementById("mail").value;

  const baseUrl = "http://localhost:3000/api/add-ajax";

  let xhr = new XMLHttpRequest();
  
  let fileInput = document.getElementById('fileupload');

  let reader = new FileReader();
  reader.readAsDataURL(fileInput.files[0]);

  reader.onload = function () {
    let req = new XMLHttpRequest();
  
    xhr.open("POST", baseUrl, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.responseText);
      }
    };

    let user = {
      name,
      phone,
      mail,
      photo: reader.result
    }

    xhr.send(JSON.stringify(user));
    document.getElementById("inn").innerHTML = "Enviado";
  };
  reader.onerror = function (error) {
    console.log('Error: ', error);
  };
};
