
import { Trait } from '@/types';
import React, { useEffect } from 'react';

type Props = {
    traits: Trait[];
}

const SearchBar: React.FC<Props> = ({traits}) => {
    const [data, setData] = React.useState([]);
    const [filteredData, setFilteredData] = React.useState([]);
    const [wordEntered, setWordEntered] = React.useState("");

    const handleFilter = (event: any) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        setFilteredData(data.filter((item: Trait) => item.name.toLowerCase().includes(wordEntered.toLowerCase())).slice(0, 5));
    }

    useEffect(() => {
        setData(traits);
    }, [traits]);

    console.log(filteredData)
  return (
    <>
        <div className="flex flex-col my-10 lg:ml-40 lg:w-1/3 lg:justify-end">
            <input className="p-4 rounded-xl" onChange={handleFilter} type="text" placeholder="Search traits"/>
            {filteredData.length !== 0 && (
                <div style={{backgroundColor: '#464542'}} className="p-4 rounded-b-xl">
                    <h1 className="m-2 text-white text-lg">Traits</h1>
                    <div>
                    {filteredData.map((item, i) => (
                        <div className="border-white border p z-10" key={i}>
                            <div className="flex flex-row">
                            <span style={{backgroundColor: item.colorHexCodes[0]}} className={"w-10 h-10 bg-slate-50 rounded-full text-center self-center my-4 mx-2"}>
                            </span>
                            <p className="text-white self-center">{item.name}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            )}
            
        </div>
    </>
  )
}


export default SearchBar;
