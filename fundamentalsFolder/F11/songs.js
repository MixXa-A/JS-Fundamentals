function songs (arr){
    const songsInArr = Number(arr.shift());
    const typeFilter = arr.pop()
    let playList = [];
    
class Song {
    constructor(type, name, time){
        this.type = type;
        this.name = name;
        this.time = time;

    }
}




     for (let i = 0; i < songsInArr; i++) {
        const elements = arr[i];
        let [type, name, time] = elements.split(`_`)
        let newSong = new Song (type, name, time);
        playList.push(newSong);
        
     }
  
     if (typeFilter === `all`){
        playList.forEach(Song => console.log(Song.name))
     }else{
        let filterSongs = playList.filter(Song => Song.type === typeFilter);
        filterSongs.forEach(Song => console.log(Song.name))
     }
   
    

}
songs([3,

    'favourite_DownTown_3:14',
    
    'favourite_Kiss_4:16',
    
    'favourite_Smooth Criminal_4:01',
    
    'favourite'])