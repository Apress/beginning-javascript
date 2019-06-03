let insocAlbums = {'first':'Information Society', 'second':'Hack', 'third':'Peace and Love Inc.'}

function groupBand(albums){
   console.table(albums);
}



document.addEventListener('DOMContentLoaded', () => {
   groupBand(insocAlbums);
});