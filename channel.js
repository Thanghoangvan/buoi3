class remote{
    constructor(id){
    this.id=id;}
    setchannel(newchannel,tv){
        tv.setchannel(newchannel)
    }
    setvolume(newvolume,tv){
        tv.setvolume(newvolume)
    }
    setstatus(newstatus,tv){
        tv.setstatus(newstatus)
    }
}

