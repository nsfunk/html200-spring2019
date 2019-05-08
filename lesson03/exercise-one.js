let artistNames = ['Monet', 'Mucha', 'Renoir', 'Kahlo', 'Pollock'];

artistNames.push('vanGogh');

console.log(artistNames);

artistNames.splice(2, 1);

console.log(artistNames);

const artistList = artistNames.join(', ');

console.log(artistList);
