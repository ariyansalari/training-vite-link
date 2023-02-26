const  NavEl= ({element,children,...others}) => {
 const el=document.createElement(element||"div");
 for (const key in others) {
        el[key]=others[key]
 }
 if(children)
   (Array.isArray(children))? el.append(...children):el.append(children)
 return el;
}
export default NavEl;