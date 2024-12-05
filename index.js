import{a as h,i as u,S as b}from"./assets/vendor-Be8boZEL.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const y of t.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&o(y)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function w(r,s){const a="47181465-58855b534a7ed572abb95719a";try{const o=await h.get("https://pixabay.com/api/?",{params:{key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}});if(o.status!==200||!o.data)throw new Error("Error receiving data from API");return o.data}catch(o){u.error({title:"Error",message:"Sorry! Connection problems. Please try later!",position:"bottomRight"}),console.error(o.message)}}function P(r){return r.map(({webformatURL:s,largeImageURL:a,tags:o,likes:e,views:t,comments:y,downloads:g})=>`<li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${o}"
              width="360"
            />
          </a>
          <ul class="info-list">
            <li class="info-item">
              <h2 class="subtitle">Likes</h2>
              <p class="info">${e}</p>
            </li>
            <li class="info-item">
              <h2 class="subtitle">Views</h2>
              <p class="info">${t}</p>
            </li>
            <li class="info-item">
              <h2 class="subtitle">Comments</h2>
              <p class="info">${y}</p>
            </li>
            <li class="info-item">
              <h2 class="subtitle">Downloads</h2>
              <p class="info">${g}</p>
            </li>
          </ul>
    </li>`).join("")}const f=document.querySelector(".form-search"),m=document.querySelector(".gallery"),i=document.querySelector(".loader"),E=document.querySelector(".input-search"),l=document.querySelector(".button-load"),d=document.querySelector("#loading-message");i.style.display="none";l.style.display="none";let c=1;const L=15;let n="";d.style.display="none";l.addEventListener("click",S);async function S(){try{c+=1,i.style.display="block",d.style.display="block",await p(n,c),q(height*2,0)}catch(r){console.error("Error loading page:",r)}finally{i.style.display="none",d.style.display="none"}}f.addEventListener("submit",async r=>{try{if(r.preventDefault(),m.innerHTML="",i.style.display="block",l.style.display="none",d.style.display="none",n=E.value.trim(),!n){u.warning({title:"Caution",message:"Please complete the field!"});return}c=1,await p(n,c)}catch(s){console.error("Error in searching:",s)}finally{i.style.display="none",d.style.display="none"}});l.addEventListener("click",async()=>{try{c+=1,i.style.display="block",await p(n.trim(),c)}catch(r){console.error("Error loading page:",r)}finally{i.style.display="none"}});async function p(r,s){try{const a=await w(r,s);i.style.display="none";const o=Math.ceil(a.totalHits/L);if(a.hits.length)l.style.display="block";else return u.error({title:"Error",message:`No results found for "${n}". Please try again with a different query.`}),l.style.display="none",!1;return m.insertAdjacentHTML("beforeend",P(a.hits)),new b(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),f.reset(),s>=o?(l.style.display="none",!1):a.hits.length?!0:(u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),!1)}catch{i.style.display="none",u.error({title:"Error",message:"Sorry, something went wrong. This is an error!",position:"bottomRight"})}}function q(){window.scrollBy({top:0,left:0,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
