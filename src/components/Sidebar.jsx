const Sidebar = () => {
    return (
        <div className="flex h-screen w-[40vh] border-r-2">
            <div className="text-black w-full">
                <div className="p-4">
                    <h2 className="text-xl font-bold mb-4">Welcome to Bharat's Gym</h2>
                    <ul className="space-y-2">
                        <li>
                            <a href="#users" className="block py-2 hover:bg-slate-300 px-3 rounded-lg">Users</a>
                        </li>
                        <li>
                            <a href="#trainers" className="block py-2 hover:bg-slate-300 px-3 rounded-lg">Trainers</a>
                        </li>
                        <li>
                            <a href="#offers" className="block py-2 hover:bg-slate-300 px-3 rounded-lg">Offers</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
