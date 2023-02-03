import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";

const User = () => {
    const [user, setUser] = useState<string>("Peter");
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleEditButton = () => {
        setIsEditing(true);
    };

    const onEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    };

    const onSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <>
            {isEditing ? (
                <form className="text-xl font-bold" onSubmit={onSave}>
                    <div className="relative w-min  ring-1">
                        <input className="indent-1" value={user} onChange={onEditChange} />
                        <button
                            className="absolute right-0 top-[50%] translate-y-[-50%] "
                            onClick={handleEditButton}>
                            <BiEditAlt className="text-gray-600" size={24} />
                        </button>
                    </div>
                </form>
            ) : (
                <div className="text-xl font-bold flex items-center gap-2  ">
                    Hi! Welcome back {user}!
                    <button onClick={handleEditButton}>
                        <BiEditAlt className="text-gray-600" size={24} />
                    </button>
                </div>
            )}
        </>
    );
};

export default User;
