let insocAlbums = {'first':'Information Society', 'second':'Hack', 'third':'Peace and Love Inc.'}

function groupBand(albums){
   console.group('Album List');
   console.log('first:', albums.first);
   console.log('second:', albums.second);
   console.log('thrid:', albums.third);
   console.groupEnd();
}



document.addEventListener('DOMContentLoaded', () => {
   groupBand(insocAlbums);
});