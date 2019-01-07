var xinwen1=document.querySelectorAll(".xinwen")
console.log(xinwen1)
for (var i=0; i<xinwen1.length;i++){
    xinwen1[i].onclick =function(){
        console.log(this)
        var index1=this.getAttribute("index")
        console.log(index1)
        var list1=document.querySelectorAll(".neirong")
        for(var j=0;j<list1.length;j++){
           list1[j].style.display = "none" 
        }
        list1[index1].style.display = 'block'
    }
    
}
