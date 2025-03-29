function cone (radius, height){
    const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;   
    const slantHeight = Math.sqrt((radius * radius) + (height * height));
    const surfaceArea = Math.PI * radius * (radius + slantHeight);
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surfaceArea.toFixed(4)}`)
}
cone(3,5)

/**
 * 1. Обем на конус
const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height; 
-------------------

2. Образуваща страна (наклонената част на конуса)

​ const slantHeight = Math.sqrt((radius * radius) + (height * height));
 ------------------

3. Обща повърхност на конус

const surfaceArea = Math.PI * radius * (radius + slantHeight);
-------------------
 */