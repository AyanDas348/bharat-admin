import { getDatabase, ref, onValue } from "firebase/database";
import { app } from "../firebase/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronRight } from 'react-icons/fa'

const OfferCard = () => {
    const db = getDatabase();
    const starCountRef = ref(db, 'users');
    const [users, setUsers] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(Object.keys(data).length)
            setUsers(Object.keys(data).length)
        });
    }, [starCountRef])
    return (
        <div className="from-[#F1947D] to-[#EE7C5F] bg-gradient-to-r rounded-3xl text-white text-opacity-80 card-body border-2 mx-3">
            <h1>Total User</h1>
            <h2>View gym user registrations</h2>
            <h3>{users}</h3>
            <h1 className="cursor-pointer flex items-center gap-8 text-lg" onClick={() => navigate('/offers/create')}>
            View User <FaChevronRight /></h1>
        </div>
    )
}

export default OfferCard