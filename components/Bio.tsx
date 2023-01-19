import type { Profile } from '@/types';
import React, { useEffect } from 'react';
import Image from 'next/image'

type Props = {
    profile: Profile[];
}

const Bio: React.FC<Props> = ({ profile }) => {
    const [description, setDescription] = React.useState('');

    useEffect(() => {
        setDescription(profile[0].description);
    }, [profile])

  return (
    <>
        <div className='flex flex-col justify-center'>
            <Image className="border-8 border-green-400 rounded-full mx-auto my-4" width={280} height={280} src="/ProfilePhoto.jpg" alt="ProfilePhoto"/>
            <div className="flex flex-row justify-center w-3/6 mx-auto">
                <h1 className="text-white text-md text-center align-center">{description}</h1>
            </div>
        </div>
    </>
  )
}


export default Bio;
