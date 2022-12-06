let emparr = [
    {
      id: "1",
      name: "a",
      job: "aaa",
      salary: "6984",
    },
];

module.exports={
    empget: (req, res) => {
        res.send(emparr);
    },
    emppost: function(req, res){
        console.log(req.body);
        emparr.push(req.body);
        res.send(emparr);
    },
    empput: (req, res) => {
        let {id}=req.params;
        let obj=req.body;
        let ind=emparr.findIndex((e) => Number(e.id)==Number(id));
        emparr[ind]=obj;
        res.send(emparr);
    },
    empdelete: (req, res) => {
        let {id}=req.params;
        let ind=emparr.findIndex((e) => Number(e.id)==Number(id));
        emparr.splice(ind, 1);
        res.send(emparr);
    }
};