import type { Profile } from '@/types';
import React, { useEffect } from 'react';

type Props = {
    profile: Profile[];
}

const Banner: React.FC<Props> = ({ profile }) => {
    const [user, setUser] = React.useState<string>('');
    const [url, setUrl] = React.useState<string>('');

    useEffect(() => {
        setUser(profile[0].userName);
        setUrl(profile[0].profileUrl);
    }, [profile])

  return (
    <>
        <div>
            <h1 className="text-white text-5xl my-4 text-center lg:text-left">{user}</h1>
            <h1 className="text-white text-xl my-2 text-center lg:text-left">{url}</h1>
        </div>
    </>
  )
}


export default Banner;
