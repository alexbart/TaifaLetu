import React, { useState } from 'react'
import { X } from 'react-feather'
import { counties } from '@/constants/posts';
import { title } from 'process';
import { useRouter } from 'next/navigation';

const PostModal = ({ open, onClose, postTitle, children }) => {
    const router = useRouter();

    const [submitting, setIsSubmitting] = useState(false);

    const [accused, setAccused] = useState('');
    const [county, setCounty] = useState('');
    const [dateOfIncident, setDateOfIncident] = useState('');
    const [caseFile, setCaseFile] = useState(null);
    const [postDetails, setPostDetails] = useState('');

    const onPostSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(`/api/posts/new`, {
                method: 'POST',
                body: JSON.stringify({
                    id: 10,
                    title: postTitle,
                    details: postDetails,
                    caseFile: caseFile,
                    dateOfIncident: dateOfIncident,
                    county: county,
                    accused: accused,
                }),
            });

            if (response.ok) {
                router.push('/');
                onClose()
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div
            onClick={onClose}
            className={`
            fixed inset-0 flex justify-center items-center
            transition-colors
            ${open ? "visible bg-black/20" : "invisible"}
            `}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={`
                bg-[#FEF9E7] rounded-xl shadow p-6 transition-all
                ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
                `}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 p-1 rounded-lg
                text-[#FEF9E7] bg-[#040979] hover:bg-[#1a1d5c] hover:text-[#FEF9E7]"
                >
                    <X />
                </button>

                {children}
                <form onSubmit={onPostSubmit}>
                    <div className="flex flex-row my-5 mx-30 gap-2">
                        <input
                            type='text'
                            name='accused'
                            placeholder='Name of Accused'
                            value={accused}
                            onChange={(e) => setAccused(e.target.value)}
                            className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#FEF9E7] hover:bg-[#1a1d5c] hover:text-white focus:ring-[#1a1d5c] focus:ring-1 sm:text-sm md:mx-10"
                        />

                        <select
                            value={county}
                            onChange={(e) => setCounty(e.target.value)}
                            className='placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#FEF9E7] hover:bg-[#1a1d5c] hover:text-white focus:ring-[#1a1d5c] focus:ring-1 sm:text-sm md:mx-10'
                        >
                            <option>Select County</option>
                            {counties.map((county) => (
                                <option key={county.key}>
                                    {county.value}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-row my-5 mx-30 gap-2">
                        <input
                            type='date'
                            name='dateOfIncident'
                            placeholder='Date of Incident'
                            value={dateOfIncident}
                            onChange={(e) => setDateOfIncident(e.target.value)}
                            className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#FEF9E7] hover:bg-[#1a1d5c] hover:text-white focus:ring-[#1a1d5c] focus:ring-1 sm:text-sm md:mx-10"
                        />

                        <input
                            type="file"
                            name="file"
                            onChange={(e) => setCaseFile(e.target.files[0])}
                            className="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#FEF9E7] hover:bg-[#1a1d5c] hover:text-white focus:ring-[#1a1d5c] focus:ring-1 sm:text-sm md:mx-10"
                        />
                    </div>

                    <div className="flex flex-row my-5 mx-30 gap-2">
                        <textarea
                            onChange={(e) => setPostDetails(e.target.value)}
                            value={postDetails}
                            placeholder='Write your case here...'
                            className='placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#FEF9E7] hover:bg-[#1a1d5c] hover:text-white focus:ring-[#1a1d5c] focus:ring-1 sm:text-sm md:mx-10'
                        />
                    </div>

                    <div className='flex md:flex-row justify-between'>
                        <button
                            onClick={onClose}
                            className="justify-self-end bg-[#FEF9E7] text-[#040979] py-2 px-5 rounded-full hover:bg-[#1a1d5c] hover:text-[#FEF9E7] border-2 border-[#1a1d5c] md:mx-10"
                        >Close</button>
                        <button
                            type='submit'
                            className="justify-self-end bg-[#040979] text-[#FEF9E7] py-2 px-7 rounded-full hover:bg-[#FEF9E7] hover:text-[#1a1d5c] hover:border-2 hover:border-[#1a1d5c] md:mx-10"
                        >Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PostModal