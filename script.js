const poems = [
  {
    author: "Cece",
    poem: "Roses are red \n Violets are blue \n Sunflowers are yellow \n I bet you were expecting something romantic but no -- these are just gardening facts.",
    image: "sunflower.jpeg",
  },
  {
    author: "Anvit",
    poem: "Roses are red \n Pizza sauce is too \n I ordered a large \n None of it is for you ",
    image: "pizza.jpeg",
  },
  {
    author: "Ernie",
    poem: "Roses are red \n Violets are blue \n Jerry Seinfeld is considering \n Making Bee Movie 2",
    image: "bee.jpeg",
  },
  {
    author: "Matty-boy",
    poem: "Ask to be pet then attack owners hand plan steps for world domination hunt anything that moves i is not fat, i is fluffy purr. Experiences short bursts of poo-phoria after going to the loo run around the house at 4 in the morning or i see a bird i stare at it i meow at it i do a wiggle come here birdy x. Cuddle no cuddle cuddle love scratch scratch.",
    image: "sunflower.jpeg"
  }
  // YOUR CODE HERE: Add an object containing two key value pairs: author and poem. Set the author property as equal to a string with your first name. Set the poem property as equal to a short "roses are red" poem. Use the new line character as in the example when you would like a line break.
  {
    author: 'Baby Boy',
    poem: `Hey Joe, don't make us cry. Just sing a love song to make it better!`,
    image: 'doodoo.jpeg'
  }
];

let displayPoems = (array) => {
  let html = "";
  let poemDiv = document.getElementById("poems");

  poemArray = array.forEach((poem) => {
    html += `
    <div class="poem">
        <img class="poem__image" src="./assets/${poem.image}"/>
        <div class="poem__author">
            Author: ${poem.author}
        </div>
        <div class="poem__content">
            ${poem.poem}
        </div>
    </div>
    `;
  });

  poemDiv.innerHTML = html;
};

displayPoems(poems);
