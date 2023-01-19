
import type { Trait } from '@/types';
import React, { useEffect } from 'react';
import MostEndorsedComponent from './MostEndorsedComponent';

type Props = {
    traits: Trait[]
}

const MostEndorsedApp: React.FC<Props> = ({ traits }) => {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        const sortedData = traits.sort((a, b) => b.score - a.score).slice(0, 6);
        setData(sortedData);
    }, [traits]);

  return (
    <>
        <div>
            <h1 className="text-white text-3xl my-6">Most Endorsed Elements</h1>
            <div className="flex flex-row">
                {data.map((item: Trait, i: number) => (
                    <MostEndorsedComponent key={i} hexcode={item.colorHexCodes[0]} name={item.name}/>
                ))}
            </div>
        </div>
    </>
  )
}


export default MostEndorsedApp;
