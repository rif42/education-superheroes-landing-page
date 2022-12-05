import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Training() {
  return (
    <>
      <Navbar />
      <div className="h-[60vw] bg-training0 flex flex-col justify-center bg-cover align-middle">
        <p className="px-[15vw] text-center font-bold text-white text-[6vw] place-self-center">
          Education Superheroes Coaching Experience
        </p>
      </div>

      <div className="h-[50vw] flex flex-row justify-center align-middle">
        <div className="w-[50%] flex flex-col justify-center align-middle">
          <h2 className="pl-[10vw] text-left font-bold text-[#554DDE] text-[4vw]">
            What happens here?
          </h2>
          <p className="text-[1.5vw] pt-[1vw] leading-relaxed text-[#6A6D9E] text-left pl-[10vw]">
            Education Superheroes’ Experience makes education, the most exciting
            space. It changes the culture of the school. Happiness becomes top
            in the order with excellence being the culture. We have met leaders
            of schools and higher education spaces who want change in their
            organizations, but do not know how to get it done. <br />
            <br /> Call us! We can help! We have identified the key areas that
            every single educator needs to focus on, and come together as a team
            to take it to the next level.
          </p>
          <a className="pt-[3vw] pl-[10vw]">
            <div className="rounded-2xl w-[15vw] h-[5vw] bg-[#16194F] text-white text-[1.1vw] flex flex-col justify-center align-middle text-center">
              Contact Us {"\u00A0 \u00A0"}
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
        <div className="w-[50%] flex flex-col justify-center align-middle">
          <img
            className="ml-[5vw] w-[35vw]"
            src={"/assets/pic-training-0.jpg"}
            alt={"campus coaching with ira and dave"}
          />
        </div>
      </div>

      <div className="h-[30vw] px-[10vw] flex flex-col justify-center align-middle">
        <h2 className="text-center font-bold text-[#554DDE] text-[4vw]">
          This experience unleashes the heart of every educator.
        </h2>
        <p className="text-[1.5vw] pt-[1vw] leading-relaxed text-[#6A6D9E] text-center">
          Note to self or better still, warning to self. There is nothing
          theoretical about how the education superheroes experience is
          designed. We write the contents but there is no book to read or manual
          to fill up. It is high intensity chaos and action. Learning happens
          most in Chaos! The various modules of education superheroes are
        </p>
      </div>
      <div className="h-fit w-full flex flex-col pb-[3vw] justify-center align-middle bg-gradient-to-b from-white to-[#dee3ed]">
        <div className="h-fit w-[90vw] flex flex-row place-self-center justify-center align-middle flex-wrap">
          <TrainingCard
            img="1-learning"
            title="Social Emotional Learning"
            text="Self Awareness, Social Awareness, Self Regulation, Social Regulation and Empathy in real and tough situations."
          />
          <TrainingCard
            img="2-instructional"
            title="Instructional Design"
            text="Learning is a change in behaviour as a result of an experience. Learn to design brand new experiences that take education to the next level."
          />
          <TrainingCard
            img="3-classroom"
            title="The New Classroom Management"
            text="Your classroom just got bigger and cooler. There is the “What to do” in the virtual space and the “What can only be done here” in the physical space. Always start with why, how, and what!"
          />
          <TrainingCard
            img="4-bigrally"
            title="The Big Rally"
            text="Learning is about challenges and you want to rally the students into taking the biggest of missions. Note that learning happens in Chaos and not Structure. Emotions can go wild when real learning happens and a RALLY to bring it all together and to uplift the students is a must have in the new culture of learning."
          />
          <TrainingCard
            img="5-learningjourney"
            title="The New Learning Journey"
            text="Think of Kanban, AGILE in Education, and Work Efficiency as a model of learning. Think of you having time in your hands to do the more important work; knowing your students and building a championship bond with them."
          />
          <TrainingCard
            img="6-dissection"
            title="Learning Dissection"
            text="Learning is multidimensional and in this new learnerverse, students’ progress and emotions can be tracked better and also attended to."
          />
          <TrainingCard
            img="7-bestpractices"
            title="Best Practices"
            text="Project Based Learning, Authentic Assessments, Flip Models, personalized learning, dissection method, and gamified learning. Creating a learning space that includes the above in a seamless manner."
          />
          <TrainingCard
            img="8-personal"
            title="The Personal Check"
            text="Fantastic educators are irreplaceable. Bad ones are. Always be amazing and you do that by designing a self checking system. Your personal inner voice, documented."
          />
          <TrainingCard
            img="9-learningguide"
            title="The Learning Guide"
            text="We do not teach anymore, we facilitate learning to be exciting. We are the new challenge masters asking the most amazing questions that push the genius up in our learners.
          "
          />
          <TrainingCard
            img="10-bigdata"
            title="Big Data and AI"
            text="This is not a scary term. Very easy and highly helpful. Learn to use data to help make learning a better experience. Enjoy this new freedom. Evolve!"
          />
          <TrainingCard
            img="11-team"
            title="The Team Educator"
            text="Collaborate with other educators globally. Connect learners globally, bridging gaps. Connect with the industry leaders to connect school learning to the real world."
          />
          <TrainingCard
            img="12-redesign"
            title="Redesigning the Learning Space"
            text="40 chairs and 40 tables facing the teacher has to go and Collaborative Learning Spaces must be in."
          />
        </div>
      </div>
      <div className="h-[30vw] px-[15vw] flex flex-col justify-center align-middle bg-training1 bg-center bg-no-repeat bg-contain">
        <h2 className="text-center font-bold text-[#554DDE] text-[3vw]">
          This experience is designed to be delivered as a team building and
          leadership challenge.
        </h2>

        <p className="text-center font-semibold text-[#554DDE] text-[1.5vw] pt-[1vw]">
          Minimum time required is 1 day to get the basic experience and a
          thorough one that is highly recommended is 3 days and 2 nights.
        </p>
      </div>

      <div className="h-[50vw] flex flex-row justify-center align-middle ">
        <div className="w-[50%] flex flex-col justify-center align-middle">
          <h2 className="pl-[15vw] text-left font-bold text-[#554DDE] text-[4vw]">
            We strongly suggest that
          </h2>
          <p className="text-[1.5vw] pt-[1vw] leading-relaxed text-[#6A6D9E] text-left pl-[15vw]">
            you do this as an offsite experience for maximum learning and
            takeaway. Get this experience into your annual calendar!
          </p>
          <a className="pt-[3vw] pl-[15vw]">
            <div className="rounded-2xl w-[15vw] h-[5vw] bg-[#16194F] text-white text-[1.1vw] flex flex-col justify-center align-middle text-center">
              Contact Us {"\u00A0 \u00A0"}
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
        <div className="w-[50%] flex flex-col justify-center align-middle">
          <img
            className="ml-[5vw] w-[35vw]"
            src={"/assets/pic-training-1.jpg"}
            alt={"campus coaching with gabe, marc and nasser"}
          />
        </div>
      </div>

      <Footer />
    </>
  );
} 

function TrainingCard({ img, title, text }) {
  return (
    <div className="h-fit w-[25vw] px-[2vw] mx-[1vw] my-[1vw] flex flex-col place-items-center">
      <img
        className="w-[12vw]"
        src={`/assets/${img}.png`}
        alt={`${img}`}
      />
      <h2 className="text-center font-poppins font-bold text-[#554DDE] text-[2vw]">
        {title}
      </h2>
      <p className="text-[1.5vw] font-poppins pt-[1vw] leading-relaxed text-[#6A6D9E] text-center">
        {text}
      </p>
    </div>
  );
}

export default Training;
