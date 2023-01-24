"use strict"
      
    movies.splice(50)       
        const AllMovies = movies.map((el)=>{
            return{       
              "title":el.title,
              "year": el.year,
              "category": el.categories,
              "id":el.imdbId ,
              "rating": el.imdbRating,
              "runtime": `${Math.trunc(el.runtime/60)} h , ${el.runtime%60} m`,
              "lang": el.language,
              "youtube": `https:/www.youtube.com/embed/${el.youtubeId}`,
              "summary": el.summary,
              "smallimg":el.smallThumbnail,
              "bigimg": el.bigThumbnail
            }
        })
        
        function AllMoviesRander(){
            AllMovies.forEach((el)=>{
                const card =createElement('div','card ',`
                <img src="${el.smallimg}" alt="${el.title}" class="card-top-img ">
                <div class="card-body">
                    <h3 class="card-title ">${el.title}</h3>
                
                <ul class="card-list mx-3 list-unstyled">
                    <li class="card-list-item"><strong>year</strong>${el.year}</li>
                    <li class="card-list-item"><strong>lenguage</strong>${el.lang}</li>
                    <li class="card-list-item"><strong>reting</strong>${el.rating}</li>
                    <li class="card-list-item"><strong>category</strong>${el.category}</li>
                </ul>
                <div class="sociol d-flex">
                    <a href="${el.youtube}" class="btn btn-danger mx-2">youTube</a>
                    <button class="btn btn-primary mx-2"  data-more = "${el.id}">read more</button>
                    <button class="btn btn-warning mx-2"  data-more = "${el.id}"> Save</button>
                     <img class = "size mac " src="imege/bookmark.svg" alt="" data-more = "${el.id}">
                    
                    
                    </div>  
                </div>  `)     

                $(".wrapper").appendChild(card)
                
            }) 
               
        } 
              

    
                 // ----------------- RENDER ALL MOVIES -----------------

        AllMoviesRander()    
            function categoryMovies(){         
                const removDub=[]
                AllMovies.forEach((el)=>{
                    el.category.forEach((e)=>{
                       if(!removDub.includes(e)){
                          removDub.push(e)
                       }              
                    });
                });
                removDub.sort()
                removDub.forEach((e)=>{
                    const option= createElement("option","item-option",e)
                    $("#ctegory").appendChild(option)
                })   
            }
            categoryMovies()       
                
              // ----------------- RENDER ALL MOVIES  END -----------------

              // ----------------- SEORCH  -----------------

            const seorchFilm = function(query,rating ,category){
                     
              return AllMovies.filter((e) => {
                return e.title.match(query) && e.rating>= rating  && e.category.includes(category) 
            })
        } 
            seorchFilm()
            
            $("#result").addEventListener("click" , () =>{
                    $('.wrapper').innerHTML = ` <span class="loader ta-center"></span> `
                    let inputValue = $("#seorch").value.trim();
                    let rating =$("#rating").value.trim()
                    let category =$("#ctegory").value.trim()
                    const regex = new RegExp(inputValue , "gi");
                    let result = seorchFilm(regex , rating , category)
                     setTimeout(() =>{
                        findeRender(result)
                     },2000)
                    
            })
            function findeRender(data=[]){
                 $(".wrapper").innerHTML = ""
                data.forEach((el)=>{
                    const card = createElement('div','card ',`
                    <img src="${el.smallimg}" alt="${el.title}" class="card-top-img">
                    <div class="card-body">
                        <h3 class="card-title ">${el.title}</h3>
                    
                    <ul class="card-list mx-3 list-unstyled">
                        <li class="card-list-item"><strong>year</strong>${el.year}</li>
                        <li class="card-list-item"><strong>lenguage</strong>${el.lang}</li>
                        <li class="card-list-item"><strong>reting</strong>${el.rating}</li>
                        <li class="card-list-item"><strong>category</strong>${el.category}</li>
                    </ul>
                    <div class="sociol d-flex">
                        <a href="${el.youtube}" class="btn btn-danger mx-2">youTube</a>
                        <button class="btn btn-primary mx-2" data-more = "${el.id}">read more</button>
                        <button class="btn btn-warning mx-2" data-more = "${el.id}"> Save</button>
                        <img class = "size mac" src="imege/bookmark.svg" alt="">
                        <img class = "heart fon" src="imege/bookmark-heart-fill.svg" alt="">
                    </div>  
                        </div>  
                    </div>  `)
                                                            
                    $(".wrapper").appendChild(card)                
                }) 
            }

            //   -------------- film filte by id -----------------------

              function filterFilm(filmId){
               let item = AllMovies.filter((e) =>{
                    return e.id ===filmId;
                })

                const row = createElement("div" , "row", `
                <div class="col-4 p-3">
                <img src="${item[0].smallimg}" alt="" class = "w-90px mt-5px img-thumbnail">
             </div>
             <div class="col-7 p-3 mt-8">
                <ul class="list-group">
                    <li class="list-group-item"><strong>film name:</strong>${item[0].title}</li>
                    <li class="list-group-item"><strong>rating:</strong>${item[0].rating}</li>
                    <li class="list-group-item"><strong>language:</strong>${item[0].lang}</li>
                    <li class="list-group-item"><strong>category:</strong>${item[0].category}</li>
                    <li class="list-group-item"><strong>Year</strong>${item[0].year}</li>
                    
                </ul>
             </div>
             <div class="col-12">
                <h3 class="text-center text-denger">summary</h3>
                <p>${item[0].summary}</p>
                </div>
                `)
                $(".modal-wrapper").appendChild(row)
              }

            // -------------- MODAL-----------------//
            
            $(".wrapper").addEventListener("click" , (e) =>{
                $(".modal-wrapper").innerHTML = ""
                if(e.target.classList.contains("btn-primary")){
                    $(".modal-window").classList.remove("hide-modal")
                    let filmId = e.target.getAttribute("data-more")
                     $("body").style.overflow = "hidden"
                    filterFilm(filmId)                   
                }          
            })
            $(".modal-window").addEventListener("click" , (e) =>{
                if(e.target.classList.contains("modal-window")){
                     $(".modal-contens").classList.toggle("animationAll")
                    }  
                if(e.target.classList.contains("hide")){
                $(".modal-window").classList.add("hide-modal") 
                $("body").style.overflow = "visible" 
                }   
            })



            ;

            // const num = $$(".mac")
            //     console.log(num);

              $(".wrapper").addEventListener("click" , (e) =>{
                    if(e.target.classList.contains("mac")){
                        e.target.style.background ="red"
                        let addFilm = e.target.getAttribute("data-more")
                          console.log(addFilm);
                    }
              } )
              
               