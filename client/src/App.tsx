// import { io } from "socket.io-client";
// const socket = io("http://localhost:4000");

const App = () => {
  // const [message, setMessage] = useState<string>("");
  // const [messageReceived, setMessageReceived] = useState<string>("");
  // const handleSendMessage = () => {
  //   console.log("clicked");
  //   socket.emit("send_message", { message: message });
  // };
  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     console.log(data);
  //     setMessageReceived(data.message);
  //   });
  // }, []);

  return (
    <>
      {/* <input
        placeholder="Message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send message</button>
      <h1>Message: {messageReceived}</h1> */}
    </>
  );
};

export default App;
