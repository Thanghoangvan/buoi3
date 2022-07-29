class mydate{
   date;
  month;
   year;
   constructor(day,month,year){
    this.day=day;
    this.month=month;
    this.year=year;
   }
   getday(){
    return this.day;
   }
   getmonth(){
    return this.month;
   }
   getyear(){
    return this.year;
   }
   setday(){
    this.day=day;
   }
   setmonth(){
    this.month=month;
   }
   setyear(){
    this.year=year;
   }
   set(year,month,day){
    this.day=day;
    this.month=month;
    this.year=year;
   }
   toString(){
    return (this.day + "/" + this.month + "/" + this.year);
   }

   }

let date1= new mydate(3,4,5)

document.write(date1.toString())

