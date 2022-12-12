$(`#btn`).on("click", async () => {
    if($(`#email`).val()==""){
        alert("Invalid input!");
    }
    else{
        console.log(1)
        let email= {
            email:$(`#email`).val()
        };
        console.log(email);
        let request=$.ajax({
        url: `http://localhost:3000/login`,
        method: `POST`,
        data: email
        });
        request.done((req) => {
            console.log("token req done");
            console.log(req);
            document.cookie=`key=${req}`;
            // window.open("./index.html","_self");
        });
        request.fail((req) => {
            alert("Request failed " + req);
        });
    }
})