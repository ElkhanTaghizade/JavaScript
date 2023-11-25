// var word=document.querySelectorAll("H1")
// var button=document.querySelector(".btn")
// button.addEventListener("click", function(){
//     word.forEach(element => {
//         element.style.color="red"
//     });
// })
// var input=document.getElementById("input1")
// input.addEventListener("keyup", function(){
//     if(input.value.length>=5)
//     {
//          alert("Stop");
//          input.value=""
//          input.style.borderColor="red"
//     }

// })
var select1=document.getElementById("select1")
var select2=document.getElementById("select2")
select1.addEventListener("change",function(){
      if(select1.value=="BMW")
      {
         select2.innerHTML = "<option value='0'>Model seç</option>";
         addmodel(select2,"M5","M5")
         addmodel(select2,"X5","X5")
         addmodel(select2,"x6","X6")
      }
      else if(select1.value=="MERCEDES")
      {
        select2.innerHTML = "<option value='0'>Model seç</option>";
        addmodel(select2,"E CLASS","E CLASS")
        addmodel(select2,"S CLASS","S CLASS")
        addmodel(select2,"G 63 AMG","G 63 AMG")
      }
      else if(select1.value=="TOYOTA")
      {
        select2.innerHTML = "<option value='0'>Model seç</option>";
        addmodel(select2,"Prado","Prado")
        addmodel(select2,"Land Cruiser","Land Cruiser")
        addmodel(select2,"Camry","Camry")
      }

})
function addmodel(Element,text,value,){
    var model=document.createElement("option")
    model.text=text
    model.value=value
    Element.add(model)
}

