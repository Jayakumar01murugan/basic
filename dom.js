{
const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);}
{
const  a = document.createAttribute("p");
const b = document.createTextNode(" heading");
a.appendChild(b);
const c = document.getElementsByTagName("body");
c.appendChild(a);
}
