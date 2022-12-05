import React from "react";

function Home() {
  return (
    <div className="w-[99%] h-fit Home">
      <div className=" h-[70vw] flex flex-row justify-center bg-home0 bg-no-repeat bg-center bg-cover">
        <div className="w-[50%] h-full flex flex-col justify-center align-middle text-left pl-[15vw]">
          <h1 className="text-[5vw] font-bold text-white">Let's Live!</h1>
          <h2 className="text-[2vw] font-medium italic text-white">
            The Trigger of Life Company!
          </h2>
          <p className="text-[1.5vw] text-white pt-[2vw] leading-relaxed">
            <b>YOU WANT CHANGE</b> Excitement, Love, Curiosity, Perseverance,
            Goals, Success, Courage, Will, Leadership, Team, Culture, Happiness,
            Strength, Knowledge, Experience, and LIFE! Is this not what{" "}
            <b>LEARNING</b>
            is about? <b>LEARNING IS LIVING. So Let’s Live!</b>
          </p>
          <a className="pt-[3vw] ">
            <div className="rounded-2xl w-[20vw] h-[5vw] bg-[#16194F] text-white text-[1.1vw] flex flex-col justify-center align-middle text-center">
              Teacher's Training Program {"\u00A0 \u00A0"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="absolute w-[2.5vw] ml-[16.7vw]">
                <line stroke="#3EBDF2" x1="5" y1="12" x2="19" y2="12" />
                <polyline stroke="red" points="12 5 19 12 12 19" />
              </svg>
            </div>
          </a>
        </div>
        <div className="w-[50%] h-full flex flex-col justify-center align-middle text-center">
          <img
            className="ml-[5vw] w-[45vw]"
            src={"/assets/pic-home-0.png"}
            alt={"picture of ira and dave near a lake"}
          />
        </div>
      </div>

      <div className=" h-[40vw] flex flex-row justify-center">
        <div className="w-[50%] h-full flex flex-col justify-center align-middle text-center">
          <img
            className="ml-[12vw] w-[30vw]"
            src={"/assets/pic-home-1.jpg"}
            alt={"picture of ira"}
          />
        </div>
        <div className="w-[50%] h-full flex flex-col justify-center align-middle pr-[15vw]">
          <h2 className="text-[4vw] font-bold tracking-tight leading-tight text-[#554DDE] text-left">
            We as education leaders want change, don’t we?
          </h2>
          <p className="text-[1.5vw] pt-[1vw] leading-relaxed text-[#6A6D9E] text-left pr-[10vw]">
            We want the best for our students and teachers. Somehow, we get
            stuck, unable to move forward because we didn’t see the pitfalls and
            don’t know how to move forward. Call Us! We can Help!
          </p>
        </div>
      </div>

      <div className=" h-[40vw] flex flex-row justify-center">
        <div className="w-[50%] h-full flex flex-col justify-center align-middle text-center pl-[10vw]">
          <h2 className="text-[4vw] font-bold tracking-tight leading-tight text-[#554DDE] text-left">
            Today’s education environment is expected to do more
          </h2>
          <p className="text-[1.5vw] pt-[1vw] leading-relaxed text-[#6A6D9E] text-left pr-[12vw]">
            The skill to learn is to do more, with less. Maintain the highest
            quality of learning while living the best lives we can.
          </p>
        </div>
        <div className="w-[50%] h-full flex flex-col justify-center align-middle ">
          <img
            className="mr-[12vw] w-[30vw]"
            src={"/assets/pic-home-2.jpg"}
            alt={"scorecampus and letsflip assisting learners"}
          />
        </div>
      </div>

      <div className=" h-[40vw] flex flex-row justify-center">
        <div className="w-[50%] h-full flex flex-col justify-center align-middle text-center">
          <img
            className="ml-[12vw] w-[30vw]"
            src={"/assets/pic-home-3.jpg"}
            alt={"campus coaching with gabe ira and dave"}
          />
        </div>
        <div className="w-[50%] h-full flex flex-col justify-center align-middle pr-[15vw]">
          <h2 className="text-[4vw] font-bold tracking-tight leading-tight text-[#554DDE] text-left">
            Learning is Living!
          </h2>
          <p className="text-[1.5vw] pt-[1vw] leading-relaxed text-[#6A6D9E] text-left pr-[10vw]">
            What our young students need from us is for us to live our best
            life! To be the best version of ourselves! To be happy!
          </p>
          <a className="pt-[3vw] ">
            <div className="rounded-2xl w-[15vw] h-[5vw] bg-[#16194F] text-white text-[1.1vw] flex flex-col justify-center align-middle text-center">
              Learn More {"\u00A0 \u00A0"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="absolute w-[2.5vw] ml-[10.5vw]">
                <line stroke="#3EBDF2" x1="5" y1="12" x2="19" y2="12" />
                <polyline stroke="red" points="12 5 19 12 12 19" />
              </svg>
            </div>
          </a>
        </div>
      </div>

      <div className=" h-[60vw] flex flex-col justify-center py-[3vw]">
        <h2 className="text-[4vw] font-bold tracking-tight leading-tight text-[#554DDE] text-center">
          Why Education Superheroes?
        </h2>
        <p className="text-[1.5vw] text-black pt-[3vw] px-[15vw] text-center pb-[3vw]">
          In the buzz and busyness of curriculum, homework, tests, exams,
          quizzes, grading, administrative work and reporting, we have forgotten
          ourselves, our purpose and our happiness. Some may agree and more will
          disagree. It’s ok! Let’s just look into the mirror and be brutally
          honest.
        </p>
        <div className="h-[40vw] flex flex-col justify-center bg-home1 bg-center bg-no-repeat bg-contain">
          <p className="text-white text-[3vw] font-semibold text-center px-[17vw]">
            When you make the decision that your happiness is key to you being
            the best educator, come join the party!
          </p>
        </div>
      </div>

      <div className=" h-[35vw] flex flex-col justify-center bg-no-repeat bg-cover bg-home2 ">
        <p className="text-[1.5vw] text-black text-center pb-[1vw]">
          You live in a world where education can be really amazing and
          relevant. You don’t have to learn many new things.
        </p>
        <h2 className="text-[3vw] font-bold tracking-tight leading-tight text-[#554DDE] text-center">
          You just have to unlearn and let go of a lot of old practices.
        </h2>
        <a className="pt-[3vw] place-self-center">
          <div className="rounded-2xl w-[15vw] h-[5vw] bg-[#16194F] text-white text-[1.1vw] flex flex-col justify-center align-middle text-center">
            Learn More {"\u00A0 \u00A0"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              className="absolute w-[2.5vw] ml-[10.5vw]">
              <line stroke="#3EBDF2" x1="5" y1="12" x2="19" y2="12" />
              <polyline stroke="red" points="12 5 19 12 12 19" />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Home;
