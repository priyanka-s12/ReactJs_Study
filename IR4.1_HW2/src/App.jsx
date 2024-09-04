import { useState } from 'react';
//usage of array in useState
function ImagesTab() {
  const arrayOfImages = [
    'https://via.placeholder.com/125x75?text=Image+1',
    'https://via.placeholder.com/125x75?text=Image+2',
    'https://via.placeholder.com/125x75?text=Image+3',
  ];
  const [imageVar, setImage] = useState(arrayOfImages[0]);

  const imagesData = arrayOfImages.map((image, index) => (
    <img src={image} key={index} onClick={() => setImage(image)} />
  ));
  return (
    <>
      <div>
        <img
          src={imageVar}
          style={{ height: 150, width: 150 }}
          alt="Placeholder Image"
        />
      </div>
      {imagesData}
    </>
  );
}

function AddItems() {
  const [items, setItem] = useState([]);

  // console.log(items);
  const listItem = items.map((item, index) => <li key={index}>{item}</li>);

  return (
    <>
      <button onClick={() => setItem([...items, `Item ${items.length + 1}`])}>
        Add Item
      </button>
      <ul>{listItem}</ul>
    </>
  );
}

//array index game
function ChangeColor() {
  const colorsArray = [
    'lightblue',
    'lightgreen',
    'lightpink',
    'lightyellow',
    'lightgrey',
  ];
  const [colorIndex, setBackgroundColor] = useState(0);

  const handleColor = () => {
    const nextIndex = colorIndex + 1;
    // console.log(nextIndex);
    if (colorsArray[nextIndex]) {
      setBackgroundColor(nextIndex);
    } else {
      setBackgroundColor(0);
    }
  };
  return (
    <>
      <div
        style={{
          backgroundColor: colorsArray[colorIndex],
          padding: '1rem',
        }}
      >
        <p>Background color is {colorsArray[colorIndex]}</p>
        <button onClick={handleColor}>Change Color</button>
      </div>
    </>
  );
}

function ToggleLoading() {
  const [toggleText, setText] = useState(false);

  return (
    <>
      <p>{toggleText ? 'Loading...' : 'Content has loaded.'}</p>
      <button onClick={() => setText(!toggleText)}>Toggle Loading</button>
    </>
  );
}

function SelectItem() {
  const itemsArray = ['Item 1', 'Item 2', 'Item 3'];

  const [itemNumber, setItem] = useState(itemsArray[itemsArray.length - 1]);

  const itemsData = itemsArray.map((item, index) => (
    <p
      key={index}
      style={{ color: item === itemNumber ? 'blue' : 'black' }}
      onClick={() => setItem(item)}
    >
      {item}
    </p>
  ));
  return (
    <>
      {itemsData}
      <p>Selected Item: {itemNumber}</p>
    </>
  );
}
export default function App() {
  return (
    <>
      <main>
        <ImagesTab />
        <hr />
        <AddItems />
        <hr />
        <ChangeColor />
        <hr />
        <ToggleLoading />
        <hr />
        <SelectItem />
      </main>
    </>
  );
}
