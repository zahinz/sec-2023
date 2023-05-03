import { useEffect, useRef, useState } from "react";

type UsernameType = string | number;
type refType = any;

function Home() {
  // const [username, setUsername] = useState<UsernameType>("");
  // const [count, setCount] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [bgColor, setBgColor] = useState("white");

  // useEffect(() => {
  //   console.log("username changes");
  // }, [username]);
  // useEffect(() => {
  //   if (count % 2 === 0) {
  //     console.log("even number");
  //   } else {
  //     console.log("odd number");
  //   }
  // }, [count]);

  // useEffect to monitor changes in activeIndex
  useEffect(() => {
    console.log(activeIndex);
    if (activeIndex === 2) {
      setBgColor("yellow");
    } else {
      setBgColor("white");
    }
  }, [activeIndex]);

  // monitor changes in bgColor & active
  // useEffect(() => {
  //   if (activeIndex % 2 === 0 && bgColor === "yellow") {
  //     alert("two state changed accordingly");
  //   }
  // }, [bgColor, activeIndex]);

  // get a ref from title
  const refTitle = useRef<refType>();
  console.log(refTitle);

  useEffect(() => {
    const domHeight = refTitle?.current?.clientHeight;
    console.log(domHeight);

    if (domHeight > 40) {
      setBgColor("green");
    }
  }, [refTitle?.current?.clientHeight]);

  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div style={{ backgroundColor: bgColor, height: "100vh" }}>
      {/* <div>Home</div>
      <h1>Welcome {username}</h1>
      <div>
        <button onClick={() => setUsername("Zahin")}>Change name</button>
      </div>
      <hr />
      <div>
        <h1>{count}</h1>
        <div>
          <button onClick={() => setCount(count + 1)}>+</button>
        </div>
      </div>
      <hr /> */}
      {/* title */}
      <h1 ref={refTitle}>
        Title page - Hello world Title page - Hello world Title page - Hello
        world Title page - Hello world
      </h1>
      <div>
        {number.map((item, index) => {
          return (
            <h1
              key={index}
              style={{
                backgroundColor: index === activeIndex ? "red" : "white",
              }}
              onClick={() => setActiveIndex(index)}
            >
              {item}
            </h1>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
