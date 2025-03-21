function floorCalc(width, length, space, pcs) {
    let spacePerTile = (width * length) / 10000;
    let spaceForCurrentTilesAvailable = spacePerTile * pcs;
    let spaceFilled = 0;
    let tiles = 0;

    while (spaceFilled < space) {
        spaceFilled += spacePerTile;
        tiles++;

       
    }

    console.log(`Ловче, това е площа, която можеш да покриеш с плочките от този търг:  ${spaceForCurrentTilesAvailable} m²`);

    console.log(`Брой необходими плочки за квадратите, които си посочил: ${tiles}`);
    
    console.log(`С обич Михаелка`)
}


floorCalc(15, 15, 5, 500);