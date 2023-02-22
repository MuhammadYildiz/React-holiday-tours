import { useState } from 'react'
import data from './Data'

function App() {
	const [myData, setmyData] = useState(data)
	const [readBtn, setreadBtn] = useState(true)

	return (
		<div className="flex flex-col w-[100%] bg-amber-900 text-white min-h-screen">
			<div>
				{myData.length > 0 && <h1 className='text-center text-3xl  m-10'>Our Tours</h1>}
				{myData.length === 0 && <h3 className='text-center text-2xl  m-10'>No tours left</h3>}
			</div>
			{myData.map((card) => (
				<div key={card.id} className="bg-white p-5 text-black m-3 sm:w-[80%] md:w-[60%] lg:w-[40%]   sm:m-auto sm:my-10 rounded-xl">
					<img src={card.src} alt="" className='w-full' />
					<h1 className='text-3xl text-center m-3'>{card.name} </h1>
					<div className='bg-zinc-500 p-5 text-white rounded-xl'>
						<div className='text-xl flex flex-col lg:flex-row justify-between items-center'>
							<h3 className=''> {card.descrip} </h3>
							<h3 className='bg-white text-black px-2 w-32 text-center my-2'> {card.price} </h3>
						</div>
						<div className='flex flex-col'>
							<p className='bg-white text-black p-3 rounded-xl'>
								{!readBtn ? card.text : card.text.substring(0, 100)}
								<span className='bg-slate-400 px-2 text-white hover:bg-black mx-2'
									onClick={() => {
										setreadBtn(!readBtn)
									}}>
									{readBtn ? "Read More " : "Read Less"}
								</span>
							</p>
							<button className='bg-white text-black w-[200px] m-auto text-center mt-3 p-3 text-xl rounded-full hover:bg-blue-600 hover:text-white'
								onClick={() => {
									setmyData(myData.filter(item => item.id !== card.id))
								}}
							>
								Not Interested
							</button>
						</div>
					</div>
				</div>
			))}
			{myData.length === 0 &&
				<button className='bg-black w-[150px] mx-auto py-2 font-bold rounded-lg hover:bg-blue-800'
					onClick={() => setmyData(data)}
				>
					Refresh
				</button>
			}
		</div>
	)
}

export default App
