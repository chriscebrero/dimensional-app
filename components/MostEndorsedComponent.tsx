
import React from 'react';

type Props = {
    name: string;
    hexcode: string;
}

const MostEndorsedComponent: React.FC<Props> = ({ name, hexcode }) => {
  return (
    <>
        <div className={`w-24 h-32 bg-black flex flex-col justify-center mr-4 border-white border`}>
            <span style={{backgroundColor: hexcode}} className={"w-10 h-10 bg-slate-50 rounded-full text-center self-center my-4"}>
            </span>
                <p className="text-xs text-white text-center">
                    {name}
                </p>
        </div>
    </>
  )
}


export default MostEndorsedComponent;
