import "./style.css"


function App() {
  return <>
  <div className="m-0 p-0 box-border">
    <section className="relative flex justify-center items-center min-h-screen bg-neutral-900">
      {/* <div className="shadow absolute [top:calc(50%_+_150px)] left-1/2 [transform:_translate(-50%,-50%)] w-[260px] h-10 [background:_rgba(0,_0,_0,_0.05)] rounded-full  "></div> */}
      <div className="bowl relative w-72 h-72 bg-white/10 rounded-full border-white/0 border-8">
      <div className="liquid [filter:drop-shadow(0_0_80px_#1ae907)] [transform-origin:top_center] absolute top-1/2 left-[5px] right-[5px] bottom-[5px] bg-[#1ae907] rounded-bl-[150px] rounded-br-[150px] " ></div>
      </div>
      
    </section>
  </div>
  </>
}

export default App;
