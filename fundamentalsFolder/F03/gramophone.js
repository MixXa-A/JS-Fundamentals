/**
 * 
6. Gramophone

Write a function, which as input will receive 3 parameters (strings)

· The first string is the name of the band

· The second string is the name of the album

· The third is holding a song name from the album

You have to find out how many times the plate will rotate the given song from the album.

The plate makes a full rotation every 2.5 seconds.

The song duration in seconds is calculate by the given formula:

(albumName.length * bandName.length) * song-name.length / 2

As output, you should print the following message:

`The plate was rotated {rotations} times.`

Rotations should be rounded up.
 */
function gramophone (nameOfTheBand, nameOfTheAlbum, thirdSongName){
    let bandNamenum = 0;
    let albumNameNum = 0;
    let thirdSongNum = 0;
    
   ///For loops не бяха нужни може да се умножава директно
   /// nameOfTheBand.length * nameOfThe........ :D


       for(let i = 0; i< nameOfTheBand.length; i++){
           bandNamenum++
       }
       for(let i = 0; i< nameOfTheAlbum.length; i++){
           albumNameNum++
       }
       for(let i = 0; i< thirdSongName.length; i++){
           thirdSongNum++
       }
   let durationOfTheSong = (albumNameNum * bandNamenum) * thirdSongNum / 2
   console.log(`The plate was rotated ${Math.ceil(durationOfTheSong/2.5)} times.`)
   }
gramophone('Black Sabbath', 'Paranoid',

'War Pigs')