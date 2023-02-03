import { formReducer, INITIAL_STATE } from "@/hooks/formReducer";
import React, { useReducer } from "react";
import { BiCalendarExclamation, BiX } from "react-icons/bi";

interface CreateTaskModalProps {
    onClose: () => void;
}

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ onClose }) => {
    const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);

    const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {};

    return (
        <div>
            <div className="w-[500px] fixed left-20 ring-1 ring-slate-400 rounded  overflow-y-hidden shadow-lg">
                <div className="relative p-4">
                    <div className="flex gap-4 pt-2 pb-4">
                        <div>
                            <BiCalendarExclamation size={30} />
                        </div>
                        <div className="flex-1 relative">
                            <h1 className="text-xl">Create A Ticket</h1>
                            <p className="text-lg">Ex. I need help walking the dog</p>
                            <button className="absolute top-0 right-0 " onClick={onClose}>
                                <BiX className="bg-slate-200 rounded" size={28} />
                            </button>
                        </div>
                    </div>
                    <form className="flex flex-col gap-3">
                        <div className="flex items-center gap-1 mb-2">
                            <div className="flex-1">
                                <label className="font-medium mb-2 block cursor-pointer" htmlFor="title">
                                    Enter title*
                                </label>
                                <input
                                    className="indent-1 w-full p-1 ring-1 ring-slate-400 rounded"
                                    type="text"
                                    placeholder="Help walking the dog"
                                    id="title"
                                    name="title"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="ml-2">
                                <label className="font-medium mb-2 block" htmlFor="status">
                                    Status*
                                </label>
                                <select
                                    className="ring-1 ring-slate-400 p-[7px]  rounded"
                                    id="status"
                                    name="status"
                                    onChange={handleInputChange}>
                                    <option className="font-sans" value="1">
                                        New
                                    </option>
                                    <option className="font-sans" value="2">
                                        Work In Progress
                                    </option>
                                    <option className="font-sans" value="3">
                                        Completed
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="font-medium mb-2 block cursor-pointer" htmlFor="message">
                                Message: *
                            </label>
                            <textarea
                                className="block w-full ring-1 ring-slate-400 resize-none h-[100px] rounded p-2"
                                id="message"
                                name="message"
                                placeholder="Hi, Can you please help me walk the dog. I need to take care of some errands."></textarea>
                        </div>
                        <div className="mt-1 flex items-center justify-between">
                            <div className="grid place-items-center bg-gray-200 self-stretch px-2 ">
                                Tip: Try to write descriptive as possible.
                            </div>
                            <button className="px-4 py-1 bg-slate-200" type="submit">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateTaskModal;
