const fs = require('fs');

function generateNFTImage(text, bgImageUrl) {
  const width = 200;
  const height = 200;
  const filename = `abc.svg`;

  const svgContent = `
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${width}" height="${height}">
      <defs>
        <pattern id="bgImage" patternUnits="userSpaceOnUse" width="100%" height="100%">
          <image xlink:href="${bgImageUrl}" width="100%" height="100%"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#bgImage)"/>
      <text 
        x="${width / 2}" 
        y="${height / 2}" 
        dominant-baseline="middle" 
        text-anchor="middle" 
        font-family="Helvetica" 
        font-size="${height / 8}" 
        fill="white"
      > Catoff Challenge
      <tspan x="${width / 2}" dy="2em">  ${text} </tspan>
      </text>
      
    </svg>
  `;

  fs.writeFileSync(filename, Buffer.from(svgContent));
}

generateNFTImage('#21', './logo.png'); // Replace with actual image path
