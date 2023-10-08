"use client";

export function Cards({data}) {
  console.log(data.type)

  const cardStyle = {
    backgroundColor: `var(--${data.type})`,
  }

  return (
    <div id="card" style={cardStyle} className={`rounded-md shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px]`}>
      <div id="card-top" className="pt-[30px] pb-0 px-10">
        <div id="card-details" className="text-white flex justify-between items-center">
          <h2 id="card-name" className="mb-[5px] text-2xl font-bold">{data.name}</h2>
          <span id="card-id">#{data.id}</span>
        </div>

        <span id="card-type" className="text-xs text-black bg-white opacity-70 shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] px-2.5 py-0.5 rounded-[10px]">{data.type}</span>

        <div id="card-img" className="w-[350px] h-[350px]">
          <img src={`${data.image}`} alt=""  className="max-h-full"/>
        </div>
      </div>

      <div id="card-info" className="flex justify-between bg-white mt-[-70px] pt-20 pb-[50px] px-[30px] rounded-br-lg rounded-bl-lg">
        <div id="card-status" className="w-[180px] px-2.5 py-0">
          <h3 className="text-xl font-bold mb-4 text-black [15px] border-b-[#6B727A] border-b border-solid">status</h3>
          <ul>
            <li className="text-[15px] text-black mb-[5px] pt-0 pb-[5px] px-0 border-b-[#C3C4C5] border-b border-solid">hp: {data.status.hp}</li>
            <li className="text-[15px] text-black mb-[5px] pt-0 pb-[5px] px-0 border-b-[#C3C4C5] border-b border-solid">attack: {data.status.attack}</li>
            <li className="text-[15px] text-black mb-[5px] pt-0 pb-[5px] px-0 border-b-[#C3C4C5] border-b border-solid">defense: {data.status.defense}</li>
            <li className="text-[15px] text-black mb-[5px] pt-0 pb-[5px] px-0 border-b-[#C3C4C5] border-b border-solid">speed: {data.status.speed}</li>
          </ul>
        </div>
        <div id="card-moves" className="w-[180px] px-2.5 py-0">
        <h3 className="text-xl font-bold mb-4 text-black [15px] border-b-[#6B727A] border-b border-solid">moves</h3>
        <ul>
          {data.moves.map((move, index) => (
            move !== "No move" && (
              <li
                className="text-[15px] text-black mb-[5px] pt-0 pb-[5px] px-0 border-b-[#C3C4C5] border-b border-solid"
                key={index}
              >
                {move.replace(/-/g, ' ')}
              </li>
            )
          ))}
        </ul>


        </div>
      </div>
    </div>  
  )
}

