let ecran=document.getElementById("ecran");
let resultat=0;
let produit=0;
let sign="+";
let valeur="0";
let division=0;
let num=0;
let op="";
document.getElementById("un").onclick=function(event)
{
   event.stopPropagation();
   let num=6/100000;
   
   console.log(num);
   entry('1');
   ecran.innerHTML=valeur;  
}
document.getElementById("deux").onclick=function(event)
{
    event.stopPropagation();
    entry('2');
 ecran.innerHTML=valeur;  
}
document.getElementById("trois").onclick=function(event)
{
    event.stopPropagation();
    entry('3');
 ecran.innerHTML=valeur;  
}
document.getElementById("quatre").onclick=function(event)
{
    event.stopPropagation();
    entry('4');
 ecran.innerHTML=valeur;  
}
document.getElementById("cinq").onclick=function(event)
{
    event.stopPropagation();
    entry('5');
 ecran.innerHTML=valeur;  
}
document.getElementById("six").onclick=function(event)
{
    event.stopPropagation();
    entry('6');
 ecran.innerHTML=valeur;  
}
document.getElementById("sept").onclick=function(event)
{
    event.stopPropagation();
    entry('7');
 ecran.innerHTML=valeur;  
}
document.getElementById("huit").onclick=function(event)
{
    event.stopPropagation();
    entry('8');
 ecran.innerHTML=valeur;  
}
document.getElementById("neuf").onclick=function(event)
{
    event.stopPropagation();
    entry('9');
 ecran.innerHTML=valeur;  
}
document.getElementById("reset").onclick=function(event)
{
    resultat=0;
    sign="+";
    valeur='0';
    produit=0;
    division=0;
    ecran.innerHTML=resultat;
    op="";
}
document.getElementById("eg").onclick=function(event)
{
    event.stopPropagation();
   sign="+";
   num=parseFloat(valeur);
   if(!produit&&!division)
   {resultat=resultat+num;
   ecran.innerHTML=resultat;}
   else if(!division)
     {  produit=produit*num;
        resultat=resultat+produit;
        ecran.innerHTML=resultat;
    }
    else
    {
        if(!num)
           resultat="erreur";
        else   
        {division=division/num;
        resultat=resultat+division;}
        ecran.innerHTML=resultat;
    }
   produit=0;
   division=0;
   valeur='0';  
   op="=";
}
document.getElementById("plus").onclick=function(event)
{
    event.stopPropagation();
   num=parseFloat(valeur);
   if(num)
   {if(!produit&&!division)
   {resultat=resultat+num;
   ecran.innerHTML=resultat;}
   else if(!division)
     {  produit=produit*num;
        resultat=resultat+produit;
        ecran.innerHTML=resultat;
    }
    else
    {
        if(!num)
           resultat="erreur";
        else   
        {division=division/num;
        resultat=resultat+division;}
        ecran.innerHTML=resultat;
    }
   sign="+";
    division=0;
   produit=0;
   valeur='0';
   }
   
}
document.getElementById("moins").onclick=function(event)
{
    event.stopPropagation();
    num=parseFloat(valeur); 
   if(num)
   {if(!produit&&!division)
   {
    resultat=resultat+num;
   ecran.innerHTML=resultat;}
   else if(!division)
     {  produit=produit*num;
        resultat=resultat+produit;
        ecran.innerHTML=resultat;
    }
    else
    {
        if(!num)
           resultat="erreur";
        else   
        {division=division/num;
        resultat=resultat+division;}
        ecran.innerHTML=resultat;
    }
   
    division=0;
   produit=0;
   valeur='0';
   }
   sign="-";
}
document.getElementById("zero").onclick=function(event)
{
    event.stopPropagation();
    if(valeur!='0')
    valeur=valeur+'0';
 ecran.innerHTML=valeur;  
}
document.getElementById("fois").onclick=function(event)
{
    num=parseFloat(valeur);
    sign="*";
    if(op==="=")
       {
        produit=resultat;
        resultat=0;
       }
    else if(!produit)
       produit=num;
    else
      produit=produit*num;
    valeur='0';     
}
document.getElementById("div").onclick=function(event)
{
    num= parseFloat(valeur)
    sign="/"
    if(op==="=")
       {division=resultat;
        resultat=0;
       }
    else if(!division)
        division=num;
    else if(!num)
        {
            ecran.innerHTML="erreur";  
        }
    else
        division=division/num;
    valeur='0';
}
document.getElementById("point").onclick=function(event)
{
    sign=".";
    valeur=valeur+'.';
}   
function entry(val)
{
       if(valeur==="0"&&sign==='-')
          {valeur='-';
          valeur=valeur+val;   
          op="";
          }
       else if(valeur==="0")
          valeur=val;
       else         
       valeur=valeur+val;   
}