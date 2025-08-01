const obj={
    firstname:"kamali",
    lastname:"Balasubramaniyam",
    age:18,
    graduated:false,
    joining:new Date("07/06/2014"),
    no_days:()=>{
        let curr=new Date()
        return curr -obj.joining

    }
}
let{firstname,lastname,age,graduated,joining,no_days}=obj
console.log(
    Math.floor(no_days()/(1000*3600*24))
)
