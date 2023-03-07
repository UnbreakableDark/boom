import  animeCarousel from"./animeCarousel";
import musicList from "./musicList";
import amimeList from "./animeList";
import comicList from "./comicList";

//设计遗留问题  先这样了   本来想做个总入口的  哎  改数据太麻烦  引以为戒

export const defaultValue={
    getZData(type){
        if(type==="music"){return musicList}
        if(type==="anime"){return amimeList}
        if(type==="comic"){return comicList}
    },
    getZDataCarousel(type){
        if(type==="music"){return musicList}
        if(type==="anime"){return animeCarousel}
        if(type==="comic"){return comicList}
    },
}
