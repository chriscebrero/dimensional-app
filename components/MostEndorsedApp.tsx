
import type { Profile, Trait } from '@/types';
import React, { useEffect } from 'react';
import MostEndorsedComponent from './MostEndorsedComponent';

type Props = {
    profile: Profile[]
}

const MostEndorsedApp: React.FC<Props> = ({ profile }) => {
    const [data, setData] = React.useState<Trait[]>([]);

    useEffect(() => {
        const sortedData = profile[0].mostEndorsedElements;
        setData(sortedData);
    }, [profile]);

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
