import{a as h,i as c,S as b}from"./assets/vendor-Be8boZEL.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function w(r,s){const i="47181465-58855b534a7ed572abb95719a";try{const o=await h.get("https://pixabay.com/api/?",{params:{key:i,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:15}});if(o.status!==200||!o.data)throw new Error("Error receiving data from API");return o.data}catch(o){c.error({title:"Error",message:"Sorry! Connection problems. Please try later!",position:"bottomRight"}),console.error(o.message)}}function P(r){return r.map(({webformatURL:s,largeImageURL:i,tags:o,likes:e,views:t,comments:n,downloads:g})=>`<li class="gallery-item">
          <a class="gallery-link" href="${i}">
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
              <p class="info">${n}</p>
            </li>
            <li class="info-item">
              <h2 class="subtitle">Downloads</h2>
              <p class="info">${g}</p>
            </li>
          </ul>
    </li>`).join("")}const p=document.querySelector(".form-search"),f=document.querySelector(".gallery"),a=document.querySelector(".loader"),S=document.querySelector(".input-search"),l=document.querySelector(".button-load"),u=document.querySelector("#loading-message");a.style.display="none";l.style.display="none";let d=1;const E=15;let y="";u.style.display="none";l.addEventListener("click",L);async function L(){try{d+=1,a.style.display="block",u.style.display="block";const r=()=>document.querySelector(".gallery-item").getBoundingClientRect();await m(y,d),window.scrollBy({top:r().height*2,left:0,behavior:"smooth"})}catch(r){console.error("Error loading page:",r)}finally{a.style.display="none",u.style.display="none"}}p.addEventListener("submit",async r=>{try{if(r.preventDefault(),f.innerHTML="",a.style.display="block",l.style.display="none",u.style.display="none",y=S.value.trim(),!y){c.warning({title:"Caution",message:"Please complete the field!"});return}d=1,await m(y,d)}catch(s){console.error("Error in searching:",s)}finally{a.style.display="none",u.style.display="none"}});async function m(r,s){try{const i=await w(r,s),o=Math.ceil(i.totalHits/E);if(a.style.display="block",i.hits.length)l.style.display="block";else return c.error({title:"Error",message:`No results found for "${y}". Please try again with a different query.`}),l.style.display="none",!1;return f.insertAdjacentHTML("beforeend",P(i.hits)),new b(".gallery a",{captionsData:"alt",captionDelay:250}).refresh(),p.reset(),s>=o?(l.style.display="none",!1):i.hits.length?!0:(c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),!1)}catch{a.style.display="none",c.error({title:"Error",message:"Sorry, something went wrong. This is an error!",position:"bottomRight"})}}
//# sourceMappingURL=index.js.map
