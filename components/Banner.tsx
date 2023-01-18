import { NextPage } from 'next';
import type { Profile } from '@/types';
import React, { useEffect } from 'react';

type Props = {
    profile: Profile[];
}

const Banner: React.FC<Props> = ({ profile }) => {
    const [user, setUser] = React.useState('');
    const [url, setUrl] = React.useState('');

    useEffect(() => {
        setUser(profile[0].userName);
        setUrl(profile[0].profileUrl);
    }, [profile])

  return (
    <>
        <div>
            <h1 className="text-white text-6xl">{user}</h1>
            <h1 className="text-white text-2xl">{url}</h1>
        </div>
    </>
  )
}


export default Banner;
