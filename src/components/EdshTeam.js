import Cards from './Cards.js';

function EdshTeam() {
    return (
    <>
    <div className="h-fit w-full">
        <div className='bg-[url("/src/assets/bg-edsh.png")]'></div>
        <div className="h-full w-[100vw] bg-[#F2F6FF] flex flex-col">
            <div className="w-full flex flex-col p-44 justify-center">
                <div className="flex flex-row">
                    <h1 className="font-thin mr-3">More than</h1>
                    <h1 className="font-bold">100 cities</h1>
                </div>
                <div className="flex grid grid-rows-2 grid-flow-col gap-10">
                    <div class="mt-80 bg-[#F2F6FF] row-span-2">
                        <Cards 
                            name="Maureen Aquino"
                            role="The Bridge"
                            bio="The Bridge. Having a Masters in Education, she knows the best of the current situation 
                            and the support educators need to make it a great experience."
                        />
                    </div>
                    <div class="mt-80 bg-[#F2F6FF] row-span-2">
                        <Cards 
                            name="Rahul Dave"
                            role="The Mechanic"
                            bio="Dave’s strength is to understand the method to the madness, and make solutions and 
                            experiences work so that you have the best outcomes."
                        />
                    </div> 
                </div>
                <div className="flex grid grid-rows-2 grid-flow-col gap-10">
                    <div class="mt-80 bg-[#F2F6FF] row-span-2">
                        <Cards 
                            name="Ira Atiqah Gabriel"
                            role="The Player"
                            bio="Ira creates experiences so that you are constantly in motion. In that motion, 
                            she will pinpoint the pitfalls and steps to success."
                        />
                    </div>
                    <div class="mt-80 bg-[#F2F6FF] row-span-2">
                        <Cards 
                            name="Gabriel Suppiah"
                            role="The Trigger"
                            bio="Before the what and the how, you need the why defined with clarity. For coaching 
                            to work, we need decisions made for change. When our lives change for the better, 
                            we will respect educational change. "
                        />
                    </div> 
                </div>
            </div>
        </div>
    </div>
    </>
    )
  }
  
  export default EdshTeam;