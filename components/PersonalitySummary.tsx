
import type { Profile, SummaryTableRow, SummaryTableValue } from '@/types';
import React, { useEffect } from 'react';

type Props = {
    profile: Profile[];
}

const PersonalitySummary: React.FC<Props> = ({ profile }) => {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://us-central1-dimensional-test-9f5ab.cloudfunctions.net/app/personalitySummaries/${profile[0].id}`);
            const json = await res.json();
            setData(json['summaryTableRows']);
        }
        fetchData();

    }, [profile])

    console.log(data, 'hello');

  return (
    <>
        <div>
            <h1 className="text-white text-6xl">Hello</h1>
                {data.map((item: SummaryTableRow, i: number) => (
                    <div key={i} className="flex flex-row justify-between border-2 border-white">
                            <p className="text-white">
                                {item.title}
                            </p>
                            <div className="flex flex-row">
                                {item.values.map((val: SummaryTableValue, i: number) => (
                                    <p key={i} className={(val.isHighlighted ? 'text-white' : 'text-[#55504F]')}>
                                        {i !== item.values.length - 1 ? val.text + '/' : val.text}
                                    </p>
                                ))}
                            </div>
                            
                    </div>
                ))}
        </div>
    </>
  )
}


export default PersonalitySummary;
