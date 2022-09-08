<template>
  <div class="AllPosts">
    <h1>all posts page</h1>
    <div class="postWrapper">
      <div  v-for="post in Posts" :key="post" class="d-flex justify-content-center"  aria-live="assertive" >
        <div class="postCard rounded-pill" >
          <h6 class="d-none">{{post.id}}</h6>
          <P>{{ post.userId }}</P>
          <P>{{ post.message }}</P>
        </div>
      </div>
    </div>
  </div>
  <div  id="submitPost">
<p>submit post</p>
<PostView/>
  </div>
</template>
<style>
  .postWrapper{
    overflow-y: scroll;
  }
.postCard{
  margin: var(--ss);
  padding: var(--ss);
  border: 5px solid var(--thirty);
  width: fit-content;
}
#submitPost{
position: fixed;
bottom: 0;
}


</style>
<script>
import PostView from './PostView.vue';
export default {
    mounted() {
        this.sendUserData();
    },
    computed: {
        Posts() {
            return this.$store.state.allPosts;
        },
        user() {
            return this.$store.state.user;
        },
    },
    methods: {
        sendUserData() {
            fetch("https://tubular-malasada-d6c6b7.netlify.app/.netlify/functions/api/userPost", {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((res) => res.json())
                .then((returnData) => {
                if (returnData.error) {
                    alert(returnData.error);
                }
                else {
                  
                    returnData.reverse();
                    localStorage.setItem("postData", JSON.stringify(returnData));
                    this.$store.state.allPosts = [];
                    let i;
                    for (i = 0; i < returnData.length; i++) {
                        this.$store.state.allPosts.push(returnData[i]);
                      }
                }
            });
            // setTimeout(this.sendUserData, 1000);
            // setTimeout(function () {
            //     this.Posts;
            // }, 1000);
        },
        searchPlanet(){
  let SearchTerm= document.querySelector('#searchInput').value.toLowerCase();
  if(SearchTerm==''){
    alert(`enter a planet's name`)
  }
  else{
    document.querySelector('#target').innerHTML='';
    let item = listing.find(o => o.name.toLowerCase()=== SearchTerm)
    
    document.querySelector('#target').innerHTML=` <div id="empty">
    <h1>No Planet found</h1>
    </div>`;
    
    document.querySelector('#target').innerHTML=`
    <div class="Item"  onclick='BuyNow()'  >
    <img src="${item.image}"  alt="PLanet IMage">  
    <h1>${item.name}</h1>
    <h4 dir="rtl">atmospheric conditions: ${item.atmosphere}</h4>
    <p class="subInfo" dir="rtl">Moons: ${item.moons}</p>
    <p class="subInfo" dir="rtl">Weather: ${item.tempRange}</p>
    <p class="subInfo" dir="rtl"> water: ${item.water}</p>
    <p class="subInfo" dir="rtl"> Size: ${item.size}</p>
    <p class="subInfo" dir="rtl" class='pop'> population: ${item.population}</p>
    <p class="subInfo" dir="rtl"> JWT: ${item.price}</p>
    <img src="${item.populationURL}" alt="No lifeforms known">
    </div>
    `;

  }
},
FilterPlanets(){
    let FilterOption= document.querySelector('#filter').value
    if(FilterOption!=='all'){

        document.querySelector('#target').innerHTML='';
            let specificView= listing.filter(Planet => Planet.tempRange == FilterOption);
        specificView.forEach((Planet)=>{

            document.querySelector('#target').innerHTML+=`
            <div class="Item"  onclick='BuyNow()'  >
            <img src="${Planet.image}"  alt="PLanet IMage">  
            <h1>${Planet.name}</h1>
            <h4 dir="rtl">atmospheric conditions: ${Planet.atmosphere}</h4>
    <p class="subInfo" dir="rtl">Moons: ${Planet.moons}</p>
    <p class="subInfo" dir="rtl">Weather: ${Planet.tempRange}</p>
    <p class="subInfo" dir="rtl"> water: ${Planet.water}</p>
    <p class="subInfo" dir="rtl"> Size: ${Planet.size}</p>
    <p class="subInfo" dir="rtl" class='pop'> population: ${Planet.population}</p>
    <p class="subInfo" dir="rtl"> JWT: ${Planet.price}</p>
    <img src="${Planet.populationURL}" alt="No lifeforms known">
    
    </div>
    `;   
    
}); 
    }}
    },
    components: { PostView }
};
</script>
