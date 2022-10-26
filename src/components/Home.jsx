export default function Home () {
    return(
        <section>
	    <div className="bg-gray-200 text-black py-20 py-auto">
		<div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
			<div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
				<h1 className="text-3xl md:text-5xl p-2 text-black-300 tracking-loose">Northcoders</h1>
				<h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Marketplace
				</h2>
				<p className="text-sm md:text-base text-black-50 mb-4">Don't want to throw away your old goodies? Why not give them a new home, now!</p>
				<a href="#"
					className="bg-transparent hover:bg-yellow-300 text-black-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
					Explore Now</a>
			</div>
			<div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
				<div className="h-48 flex flex-wrap content-center">
					<div>
						<img className="inline-block mt-28 " src="https://images.unsplash.com/photo-1599933190257-ade62d308472?fit=crop&w=205&h=257&q=80" alt="An old 2000 GameBoy laid on a wooden surface."/></div>
						<div>
							<img className="inline-block mt-28 pl-10"  src="https://images.unsplash.com/photo-1596507457972-0ab33221e1cf?fit=crop&w=205&h=257&q=80" alt="A black and brown chessboard with brown pieces."/></div>
                            <img className="inline-block mt-28 pl-10" src="https://images.unsplash.com/photo-1591105575839-1fb30d5ce4a5?fit=crop&w=205&h=207&q=80" alt="A grey drone flying in the air with a red light showing that it is powered on."/>
							</div>
						</div>
					</div>
				</div>
        </section>
    )
}