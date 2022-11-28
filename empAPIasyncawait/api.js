function employee(){
    this.emparr=[];

    this.post=async (obj)=>{
        let p = new Promise((resolve, reject)=>{
            setTimeout(()=>{
                this.emparr.push(obj);
                resolve(this.emparr);
            }, 2000);
        });
        console.log(this.emparr);
        console.log(obj);
        return p;
    };

    this.get=async ()=>{
        let p=new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(this.emparr);
            }, 2000);
        });
        return p;
    };

    this.put=async (obj)=>{
        let p=new Promise((resolve, reject)=>{
            setTimeout(()=>{
                let ind=this.emparr.findIndex((e)=> e.id==obj.id);
                this.emparr[ind].name=obj.name;
                this.emparr[ind].job=obj.job;
                this.emparr[ind].salary=obj.salary;
                resolve(this.emparr);
            }, 2000);
            console.log(this.emparr);
        });
        return p;
    };

    this.delete=async (eid)=>{
        let p=new Promise((resolve, reject)=>{
            setTimeout(()=>{
                this.emparr.splice(
                    this.emparr.findIndex((a)=>a.id==eid), 1);
                    resolve(this.emparr);
            }, 2000);
            console.log(this.emparr);
        });
        return p;
    };
};