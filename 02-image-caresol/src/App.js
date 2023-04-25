import { Caresol } from "./components/image-caresol/image-caresol";

const imageData = [
  {
    id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1590073844006-33379778ae09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  {
    id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1674574124340-c00cc2dae99c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1677579016602-d342f911d11c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "4",
    imageUrl:
      "https://images.unsplash.com/photo-1682344382195-553372019072?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: "5",
    imageUrl:
      "https://images.unsplash.com/photo-1681907285197-d314f53cc434?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
  },
];

function App() {
  return (
    <div className="App">
      <Caresol imageData={imageData} />
    </div>
  );
}

export default App;
