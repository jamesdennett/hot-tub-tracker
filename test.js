// A fake database call that takes 2 seconds to respond
function getFakeData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['reading 1', 'reading 2', 'reading 3']);
    }, 2000);
  });
}

// Without await - broken, gets the promise not the data
function getReadingsBroken() {
  const data = getFakeData();
  console.log(data); // prints: Promise { <pending> }
}

// With await - correct, waits for the actual data
async function getReadingsCorrect() {
  const data = await getFakeData();
  console.log(data); // prints: ['reading 1', 'reading 2', 'reading 3']
}

getReadingsBroken();
getReadingsCorrect();

// Regular function
function add(a, b) {
  return a + b;
}

// Same thing as an arrow function
const add2 = (a, b) => a + b;

console.log(add(2, 3));   // 5
console.log(add2(2, 3));  // 5

// A single reading as an object
const reading = {
  date: '01/04/2026',
  ph: 7.4,
  chlorine: 4.0,
  alkalinity: 100,
  notes: 'Water looks clear'
};

// Access individual values with dot notation
console.log(reading.ph);        // 7.4
console.log(reading.notes);     // Water looks clear

// An array of objects - this is what Supabase will return
const readings = [
  { date: '01/04/2026', ph: 7.4, chlorine: 4.0, alkalinity: 100 },
  { date: '31/03/2026', ph: 7.2, chlorine: 3.5, alkalinity: 95 },
  { date: '30/03/2026', ph: 7.6, chlorine: 4.5, alkalinity: 110 }
];

// Loop through them
readings.forEach(r => {
  console.log(`${r.date} — pH: ${r.ph}`);
});