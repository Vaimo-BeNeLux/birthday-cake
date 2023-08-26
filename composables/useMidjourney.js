const token = 'a55caa45-c0e9-41c6-8d33-61e709754753';
const endpoint = 'https://api.midjourneyapi.io/v2/';
const examplePrompt = "Cartoon character with a ridiculous birthday cake on the table in front of the person"

const cakePrompts = [
  "Animated birthday cake in 3D Cartoon style, bursting with fun and absurdity, decorated with whimsical creatures and odd objects, set on a table, taking up 50% of the central space",
  "Pixar animation style birthday cake that's ridiculous and fun, adorned with quirky characters - people, animals, and objects, placed on a table, centered and occupying 50% of the frame",
  'Ridiculous fun birthday cake, cartoon style cake, cake on the table, birthday cake, Gravity Falls style, random cake'
];
const personPrompts = [
  'cartoon, cartoon style, cartoon character, gravity falls, Pixar animation style, birthday, person seated before a table, birthday cake on the table, single color smooth background,',
  "A person seated before a table featuring a whimsical birthday cake, rendered in a blend of 3D cartoon, Gravity Falls and Pixar styles, Person as Cartoon character, Ridiculous birthday cake in the front",
  'Cartoon character half of body, Cartoon style, Ridiculous fun birthday cake, cartoon style cake, cake on the table, birthday cake, Gravity Falls style'
];

const headers = {
  'Authorization': token,
  'Content-Type': 'application/json'
};

function rand(arr) {
  var index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

const uniqueCake = () => {
  const level = ["one-level cake", "two-level cake", "three-level cake"];
  const details = ["low details on the cake", "medium details on the cake", "high details on the cake"]
  const color = ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure",
    "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue",
    "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse",
    "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson",
    "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray",
    "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange",
    "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue",
    "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue",
    "DimGray", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen",
    "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gold", "Rainbow", "Silver", "Fire", "Ruby", "Steel", "Pearl", "Multicolor"]
  return ', ' + rand(level) +', '+ rand(color) +' '+ rand(color) + " colored cake, " + rand(details);
}


export const imaginePerson = async (person) => {
  if(person.face) {
    const photo = person.photo_link ? person.photo_link + ' ' : '';
    const prompt = photo + personPrompts[0] + uniqueCake();
    
    return imagine(prompt);
  } else {
    const uniquePart = ', perfect birthday cake for ' + person.first_name + ' ' + person.last_name
    return imagine(cakePrompts[0] + uniqueCake() + uniquePart);
  }
}

export const imagine = async (prompt) => {
  const url = endpoint + 'imagine/';
  const data = {
    "prompt": prompt || examplePrompt,
  };
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const imgData = await response.json();
    console.log(imgData);

    return imgData;
  } catch (e) {
    return e;
  }
}

export const getResult = async (taskId) => {
  const url = endpoint + 'result/';
  const data = {
    "taskId": taskId,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (e) {
    return e;
  }
}