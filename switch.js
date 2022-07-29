class switchlamp{
constructor(lamp,status){
    this.status=status
    this.lamp=lamp
}
switchbutton(newstatus){
 this.status=newstatus;
}
connecttolamp(newlamp){
    this.lamp=newlamp;
}
switchoff(){
   this.status="false"
}
switchon(){
    this.status="true"
}
}