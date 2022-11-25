function employee(){
    this.emparr=[];

    this.post=(obj, disp)=>{
        setTimeout(()=>{
            this.emparr.push(obj);
            disp(this.emparr);
        }, 2000);
        console.log(this.emparr);
        console.log(obj);
    };

    this.get=(cb)=>{
        setTimeout(() => {
            cb(this.emparr);
        }, 2000);
    };

    this.put=(obj, disp)=>{
        setTimeout(()=>{
            this.emparr[obj.id].name=obj.name;
            this.emparr[obj.id].job=obj.job;
            this.emparr[obj.id].salary=obj.salary;
            disp(this.emparr);
        }, 2000);
        console.log(obj);
    };

    this.delete=(eid, disp)=>{
        setTimeout(()=>{
            this.emparr.splice(
                this.emparr.findIndex((a)=>a.id==eid), 1);
                disp(this.emparr);
        }, 2000);
        console.log(this.emparr);
    };
};