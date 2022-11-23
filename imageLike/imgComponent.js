function imgcomponent(url, h, w, alt){
    let div=document.createElement("div");
    let img=document.createElement("img");
    img.src=url;
    img.alt=alt;
    img.height=h;
    img.width=w;
    let p1=document.createElement("p");
    p1.innerText="0";
    let p2=document.createElement("p");
    let btn=document.createElement("button");
    btn.innerText="Like"
    p2.append(btn);
    div.append(img, p1, p2);
    // let divMain=document.getElementById("main"); //using this imgcomponent is appended in main div.
    // divMain.append(div);
    document.body.append(div); //using this imgcomponent is appended in body.

    btn.onclick=()=>{
        p1.innerText=like(p1);
    }
    function like(l){
        let cnt=Number(l.innerText)+1;
        return cnt;
    }
}