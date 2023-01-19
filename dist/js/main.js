(()=>{"use strict";const e=function({timing:e,draw:t,duration:r}){let o=performance.now();requestAnimationFrame((function l(c){let a=(c-o)/r;a>1&&(a=1);let s=e(a);t(s),a<1&&requestAnimationFrame(l)}))},t=e=>{let t=!0;return e.forEach((e=>{switch(e.classList.remove("error"),e.getAttribute("name")){case"fio":if(!e.value.match(/[a-яA-я]{2}/gi)){e.style.border="2px solid red";break}return e.style.border="",void e.classList.remove("error");case"tel":if(!e.value.match(/^((\+7|7|8)+\(?([0-9]){3}\)?)(\-?([0-9]){3})(\-?([0-9]){2}){2}$/g)){e.style.border="2px solid red";break}return e.style.border="",void e.classList.remove("error");default:return}e.classList.add("error"),t=!1})),t};(()=>{const t=document.querySelector(".modal-overlay"),r=document.querySelector(".modal-callback"),o=document.querySelector(".services-elements"),l=document.querySelectorAll(".callback-btn"),c=document.querySelector('img[alt="modal-close"]'),a=document.querySelector(".button-services"),s=document.querySelector(".up"),n=()=>{"none"===t.style.display?(s.style.zIndex="20",e({duration:800,timing:e=>e,draw(e){r.style.display="block",t.style.display="block",t.style.opacity=100*e+"%",r.style.opacity=100*e+"%",r.style.transform=`translateX(-${150-100*e}%)`,r.style.left=""+50*e}})):(t.style.display="none",r.style.display="none",s.style.zIndex="")};n(),o.addEventListener("click",(e=>{e.preventDefault(),"A"===e.target.tagName&&n()})),l.forEach((e=>{e.addEventListener("click",n)})),a.addEventListener("click",n),t.addEventListener("click",n),c.addEventListener("click",n)})(),(()=>{const e=document.querySelector(".rf > form"),r=e.querySelectorAll("input"),o=document.createElement("div");e.addEventListener("submit",(l=>{l.preventDefault(),(()=>{const l=new FormData(e),c={};var a;e.append(o),o.textContent="Отправка данных..",l.forEach(((e,t)=>{"tel"===t&&""===e||("fio"===t&&""===e&&(e="Имя не указано"),c[t]=e)})),(()=>{let e=!0;return t(r),r.forEach((t=>{t.classList.contains("error")&&(e=!1)})),e})()?(a=c,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(a),headers:{"Content-type":"application/json"}}).then((e=>e.json()))).then((e=>{o.textContent="Данные отправлены!",setTimeout((()=>o.remove()),3e3),r.forEach((e=>{"submit"!==e.getAttribute("type")&&(e.value="")}))})).catch((e=>{o.textContent="Произошла ошибка"})):(o.textContent="Некорректный ввод",setTimeout((()=>o.remove()),3e3))})()}))})(),(()=>{const e=document.querySelector('input[name="fio"]'),r=document.querySelector(".tel");e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я]/,""),t([e.target])})),r.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9\+]/,""),t([e.target])}))})(),(()=>{const e=document.querySelector(".top-menu"),t=document.querySelector("#services"),r=document.querySelector("#faq"),o=document.querySelector("#contacts"),l=document.querySelector(".up"),c=e=>{window.scroll({left:0,top:e.offsetTop,behavior:"smooth"})};l.style.opacity="0",e.addEventListener("click",(e=>{if(e.preventDefault(),"A"===e.target.tagName)switch(e.target.getAttribute("href")){case"#services":c(t);break;case"#faq":c(r);break;case"#contacts":c(o);break;default:return}})),l.addEventListener("click",(()=>{window.scroll({left:0,top:0,behavior:"smooth"})})),window.addEventListener("scroll",(()=>{document.documentElement.scrollTop>590?l.style.opacity="1":l.style.opacity="0"}))})(),(()=>{const e=document.querySelector(".accordeon"),t=e.querySelectorAll(".element"),r=e.querySelectorAll(".element-content");e.addEventListener("click",(e=>{e.target.classList.contains("title")&&(t.forEach((e=>{e.classList.remove("active")})),e.target.closest(".element").classList.add("active"),r.forEach((e=>{e.closest(".active")?e.style.display="block":e.style.display="none"})))}))})(),(()=>{const t=document.querySelectorAll(".item"),r=document.querySelectorAll(".table"),o=document.querySelectorAll(".table-cell");let l=0;const c=()=>{t.forEach((e=>{e.classList.remove("active")})),t[l].classList.add("active"),o.forEach((t=>{t.style.opacity="0",e({duration:900,timing:e=>e,draw(e){t.style.opacity=100*e+"%"}})})),t.forEach((e=>{e.classList.contains("active")?(e.style.display="block",r[l].style.visibility="visible",r[l].style.opacity="1"):e.style.display="none"})),l++,l>2&&(l=0)};c(),setInterval((()=>{c()}),3e3)})()})();