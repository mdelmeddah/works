//<![CDATA[


!function(e, t){


var ge = function(a, b) { // Get Elements Actions
var n=a.substring(3);return 0==a.indexOf("#T=")?b.getElementsByTagName(n):0==a.indexOf("#C=")?b.getElementsByClassName(n):0==a.indexOf("#Q=")?e.querySelectorAll(n):e.getElementById(a)
},


at = function(a, b, c) { // Attribute Actions
var n=a.substring(3);return 0==a.indexOf("#G=")?b.getAttribute(n):0==a.indexOf("#R=")?b.removeAttribute(n):0==a.indexOf("#S=")&&b.setAttribute(n,c)
},


rs = function(a, b){ // Remove Sections
for(var s=ge("#T=div",e),i=0;i<s.length;i++)a==s[i].className&&(at("#R=class",s[i])),-1!=s[i].className.indexOf(b)&&(at("#R=class",s[i])),-1!=s[i].className.indexOf(a)&&(s[i].className=s[i].className.replace(a,""));
},


re = function(a){ // Remove Elements
return a.parentNode.removeChild(a)
},



/* ===============================================

             Left Sidebar Functions

=============================================== */


sb = function(){ // SideBar Function

// Sidebar Title
for(var h=ge("#Q=#MLeft>div>h3"),i=0;i<h.length;i++)at("#R=class",h[i]),h[i].innerHTML="<span>"+h[i].textContent+"</span>";

// Label List
for(var l=ge("#Q=.Label>*>*>li"), i=0,a,s; i<l.length;i++)l[i].parentNode.className="LList",s=ge("#T=span",l[i])[0].textContent,a=ge("#T=a",l[i])[0].textContent.replace(s,""),ge("#T=a",l[i])[0].href="/search?label="+a,t.location.href!=ge("#T=a",l[i])[0].href?(l[i].innerHTML="<a href='/search?label="+a+"'><i class='fa fa-dot-circle-o'></i>"+a+"</a><m>"+s+"</m>"):(l[i].className="Curent",l[i].innerHTML="<span><i class='fa fa-dot-circle-o'></i>"+a+"</span><m>"+s+"</m>");

// Label Cloud
for(var l=ge("#Q=.Label>div>span"),i=0,a,s;i<l.length;i++)at("#R=class",l[i]),s=ge("#T=span",l[i])[0].textContent,ge("#T=a",l[i])[0].href="/search?label="+a,a=ge("#T=a",l[i])[0].textContent.replace(s,""),t.location.href!=ge("#T=a",l[i])[0].href ? (l[i].innerHTML="<a href='/search?label="+a+"'><i class='fa fa-dot-circle-o'></i>"+a+"</a>"):(l[i].className="Act",l[i].innerHTML="<span><i class='fa fa-dot-circle-o'></i>"+a+"</span>");


};





sb();
//rs("section", "widget");


}(document, window);

//]]>