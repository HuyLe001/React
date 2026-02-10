import './App.css'
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [running]);

  return (
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-950 to-black relative overflow-hidden'>
      {/* Background stars */}
      <div className='absolute inset-0 opacity-70'>
        <div className='absolute top-20 left-10 w-4 h-4 bg-white rounded-full animate-pulse shadow-[0_0_25px_rgba(255,255,255,0.9)]'></div>
        <div className='absolute top-40 right-20 w-4 h-4 bg-blue-300 rounded-full animate-pulse shadow-[0_0_25px_rgba(147,197,253,0.9)]'></div>
        <div className='absolute bottom-32 left-1/4 w-4 h-4 bg-purple-300 rounded-full animate-pulse shadow-[0_0_25px_rgba(216,180,254,0.9)]'></div>
        <div className='absolute top-1/3 right-1/3 w-4 h-4 bg-pink-300 rounded-full animate-pulse shadow-[0_0_25px_rgba(249,168,212,0.9)]'></div>
        <div className='absolute bottom-20 right-1/4 w-4 h-4 bg-cyan-300 rounded-full animate-pulse shadow-[0_0_25px_rgba(103,232,249,0.9)]'></div>
        <div className='absolute top-60 left-1/3 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.7)]'></div>
        <div className='absolute bottom-40 right-10 w-3 h-3 bg-blue-200 rounded-full shadow-[0_0_20px_rgba(191,219,254,0.7)]'></div>
        <div className='absolute top-1/2 left-20 w-3 h-3 bg-purple-200 rounded-full animate-pulse shadow-[0_0_20px_rgba(233,213,255,0.7)]'></div>
        <div className='absolute bottom-60 left-1/2 w-4 h-4 bg-cyan-200 rounded-full shadow-[0_0_20px_rgba(165,243,252,0.7)]'></div>
        <div className='absolute top-10 right-1/4 w-3 h-3 bg-pink-200 rounded-full shadow-[0_0_20px_rgba(251,207,232,0.7)]'></div>
      </div>

      {/* Rotating galaxy ring 1 */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] animate-rotate pointer-events-none'>
        <div className='absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-cyan-400 rounded-full shadow-[0_0_30px_rgba(34,211,238,1),0_0_60px_rgba(34,211,238,0.6)]'></div>
        <div className='absolute top-1/4 right-0 translate-x-1/2 w-5 h-5 bg-purple-400 rounded-full shadow-[0_0_30px_rgba(168,85,247,1),0_0_60px_rgba(168,85,247,0.6)]'></div>
        <div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-pink-400 rounded-full shadow-[0_0_30px_rgba(244,114,182,1),0_0_60px_rgba(244,114,182,0.6)]'></div>
        <div className='absolute top-1/4 left-0 -translate-x-1/2 w-5 h-5 bg-blue-400 rounded-full shadow-[0_0_30px_rgba(59,130,246,1),0_0_60px_rgba(59,130,246,0.6)]'></div>
        <div className='absolute top-[15%] right-[15%] w-4 h-4 bg-white rounded-full shadow-[0_0_25px_rgba(255,255,255,0.9)]'></div>
        <div className='absolute bottom-[15%] right-[15%] w-4 h-4 bg-cyan-300 rounded-full shadow-[0_0_25px_rgba(103,232,249,0.9)]'></div>
        <div className='absolute bottom-[15%] left-[15%] w-4 h-4 bg-purple-300 rounded-full shadow-[0_0_25px_rgba(216,180,254,0.9)]'></div>
        <div className='absolute top-[15%] left-[15%] w-4 h-4 bg-pink-300 rounded-full shadow-[0_0_25px_rgba(249,168,212,0.9)]'></div>
      </div>

      {/* Rotating galaxy ring 2 (reverse) */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] animate-rotate-reverse pointer-events-none'>
        <div className='absolute top-[5%] left-1/2 -translate-x-1/2 w-5 h-5 bg-purple-300 rounded-full shadow-[0_0_30px_rgba(216,180,254,1),0_0_60px_rgba(216,180,254,0.6)]'></div>
        <div className='absolute top-1/2 right-[5%] translate-x-1/2 w-5 h-5 bg-cyan-300 rounded-full shadow-[0_0_30px_rgba(103,232,249,1),0_0_60px_rgba(103,232,249,0.6)]'></div>
        <div className='absolute bottom-[5%] left-1/2 -translate-x-1/2 w-5 h-5 bg-pink-300 rounded-full shadow-[0_0_30px_rgba(249,168,212,1),0_0_60px_rgba(249,168,212,0.6)]'></div>
        <div className='absolute top-1/2 left-[5%] -translate-x-1/2 w-5 h-5 bg-blue-300 rounded-full shadow-[0_0_30px_rgba(147,197,253,1),0_0_60px_rgba(147,197,253,0.6)]'></div>
        <div className='absolute top-[20%] right-[20%] w-4 h-4 bg-white rounded-full shadow-[0_0_25px_rgba(255,255,255,0.9)]'></div>
        <div className='absolute bottom-[20%] right-[20%] w-4 h-4 bg-yellow-300 rounded-full shadow-[0_0_25px_rgba(253,224,71,0.9)]'></div>
        <div className='absolute bottom-[20%] left-[20%] w-4 h-4 bg-green-300 rounded-full shadow-[0_0_25px_rgba(134,239,172,0.9)]'></div>
        <div className='absolute top-[20%] left-[20%] w-4 h-4 bg-rose-300 rounded-full shadow-[0_0_25px_rgba(253,164,175,0.9)]'></div>
      </div>

      <div className='relative flex flex-col items-center justify-center gap-8 z-10 w-full h-full py-8'>
        <h1 className='text-[6rem] font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.9)] leading-tight'>
          ⏱ STOPWATCH
        </h1>

        <div className='bg-black/60 rounded-[2.5rem] px-16 py-12 shadow-2xl shadow-purple-500/40 border-2 border-purple-500/40 backdrop-blur-xl'>
          <div className='text-[8rem] font-black text-center tracking-[0.1em] font-mono leading-none'>
            <span className='text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,1),0_0_40px_rgba(34,211,238,0.5)]'>
              {("0" + Math.floor((time / 60000) % 60)).slice(-2)}
            </span>
            <span className='text-purple-400 mx-4'>:</span>
            <span className='text-purple-400 drop-shadow-[0_0_20px_rgba(168,85,247,1),0_0_40px_rgba(168,85,247,0.5)]'>
              {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
            </span>
            <span className='text-pink-400 mx-4'>:</span>
            <span className='text-pink-400 drop-shadow-[0_0_20px_rgba(244,114,182,1),0_0_40px_rgba(244,114,182,0.5)]'>
              {("0" + Math.floor((time / 10) % 100)).slice(-2)}
            </span>
          </div>
          <div className='text-center mt-6 text-2xl text-purple-300/80 tracking-[0.5em] font-bold'>
            <span className='mx-8'>MINUTES</span>
            <span className='mx-8'>SECONDS</span>
            <span className='mx-6'>MILLISEC</span>
          </div>
        </div>

        <div className='flex gap-6 justify-center items-center'>
          {
            running ? (
              <button
                className='bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white text-2xl font-black py-6 px-14 rounded-3xl shadow-2xl shadow-pink-500/60 hover:shadow-pink-500/80 transform hover:scale-110 transition-all duration-200 border-4 border-pink-400/40 uppercase'
                onClick={() => { setRunning(false) }}
              >
                ⏸ STOP
              </button>
            ) : (
              <button
                className='bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white text-2xl font-black py-6 px-14 rounded-3xl shadow-2xl shadow-cyan-500/60 hover:shadow-cyan-500/80 transform hover:scale-110 transition-all duration-200 border-4 border-cyan-400/40 uppercase'
                onClick={() => { setRunning(true) }}
              >
                ▶ START
              </button>
            )
          }
          <button
            className='bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-600 hover:to-indigo-600 text-white text-2xl font-black py-6 px-14 rounded-3xl shadow-2xl shadow-purple-500/60 hover:shadow-purple-500/80 transform hover:scale-110 transition-all duration-200 border-4 border-purple-400/40 uppercase'
            onClick={() => { setTime(0) }}
          >
            ↻ RESET
          </button>
        </div>
      </div>
    </div>
  );
}

export default App
