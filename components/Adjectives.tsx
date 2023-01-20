
import { Profile } from '@/types';
import React, { useEffect } from 'react';

type Props = {
    profile: Profile[];
}

const Adjectives: React.FC<Props> = ({ profile }) => {
    const [adj, setAdj] = React.useState<string[]>([]);

    useEffect(() => {
        const adjList = profile[0].adjectives;
        setAdj(adjList);
    }, [profile]);
  
    return (
    <>
        <div className="my-10">
              <h1 className="text-white text-3xl mb-6">Adjectives</h1>
              <div className="flex flex-row">
                {adj.map((item, index) => (
                    <p className="text-white" key={index}>{index === adj.length - 1 ? item : item + ', '}</p>
                ))}
              </div>
        </div>
    </>
  )
}


export default Adjectives;
