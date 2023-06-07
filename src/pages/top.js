//import clientPromise from "../../lib/mongodb";

export default function Top () {
    return (
        <div className="min-h-screen bg-cyan p-8">
            <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex flex-wrap sm:items-center sm:space-y-0 sm:space-x-6">
                <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://images.unsplash.com/photo-1685810062916-f14fdc0bfa64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt=" road" />
                <div class="text-center space-y-2 sm:text-left">
                    <div class="space-y-0.5">
                    <p class="text-lg text-black font-semibold">
                        Erin Lindford
                    </p>
                    <p class="text-slate-500 font-medium">
                        Product Engineer
                    </p>
                    </div>
                    <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
                </div>
            </div> 
        </div>          
    )
}