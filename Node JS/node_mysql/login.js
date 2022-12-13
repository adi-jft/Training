$(`#btn`).on("click", async () => {
    if($(`#email`).val()==""){
        alert("Invalid input!");
    }
    else{
        let email= {
            email:$(`#email`).val()
        };
        let request=$.ajax({
        url: `http://localhost:3000/login`,
        method: `POST`,
        data: email
        });
        request.done((req) => {
            console.log(req);
            sessionStorage.setItem("key",req);
            window.open("./index.html","_self");
        });
        request.fail((req) => {
            alert("Request failed " + req);
        });
    }
})