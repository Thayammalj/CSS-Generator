//document load aanathum indha action nadakanum so call evenlistener
//document complete ah load aanathum oru ananamous function call aagum

document.addEventListener("DOMContentLoaded",()=>{
    
    const allBorder=document.getElementById('all');
    const all_value=document.getElementById('all_value');
    const code=document.getElementById('code');
    const container=document.querySelector('.container');
    const brn=document.querySelector('#btn');
    const border_styleElemnet=document.getElementById('border_style');
    const borderElement=document.getElementById('border');
    const border_value=document.getElementById('border_value');


    var all_radius=10;
    var border_style="solid";
    var border_size=3;
    var coding="";

function allBorderUpdate(){
    all_radius=allBorder.value;
    border_size=borderElement.value;
   all_value.innerText=all_radius+"px";
   border_value.innerText=border_size+"px";
  coding=`
  border-radius:${all_radius}px;
  border:${border_size}px ${border_style}#3c40c6;
  `;
  code.value=coding;
  container.style.cssText=coding;
}



allBorder.addEventListener("mousemove",allBorderUpdate);
allBorder.addEventListener("change",allBorderUpdate);

borderElement.addEventListener("mousemove",allBorderUpdate);
borderElement.addEventListener("change",allBorderUpdate);




btn.addEventListener('click',()=>{
    document.querySelector('textarea').select();
    document.execCommand('copy');
    alert("Code Coppied")
})
allBorderUpdate();


//Border stye
border_styleElemnet.addEventListener('change',function(){
    border_style=this.value;
    allBorderUpdate();
});

});


  