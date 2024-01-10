import { CheckIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from 'react-router-dom';

const CardDefault = () => {
    const [includedFeatures, setIncludedFeatures] = useState([
        'Private forum access',
        'Member resources',
        'Entry to annual conference',
        'Official member t-shirt',
    ])
    const [offerHead, setOfferHead] = useState('Zumba');
    const [description, setDescription] = useState('ABCDE');
    const [price, setPrice] = useState('100');
    const [discount, setDiscount] = useState('');
    const navigate = useNavigate()
    const handleFeaturesChange = (index, event) => {
        const updatedFeatures = [...includedFeatures];
        updatedFeatures[index] = event.target.value;
        setIncludedFeatures(updatedFeatures);
    };
    const [isMonthly, setIsMonthly] = useState(false);

    const handleToggle = () => {
        setIsMonthly(!isMonthly);
    };
    const [image, setImage] = useState(null);

    const handleSave = () => {
        if (!image) {
            window.alert('Please add an image')
        } else {
            const db = getDatabase();
            set(ref(db, 'offers/' + offerHead.split(' ').join('_')), {
                title: offerHead,
                description: description,
                price: price,
                image: image,
                features: includedFeatures,
            });
            navigate('/')
        }
    }
    console.log(offerHead.split(' ').join('_'))

    const handleImageUpload = (event) => {
        const uploadedImage = event.target.files[0];

        const reader = new FileReader();
        reader.onload = (event) => {
            const base64String = event.target.result;
            setImage(base64String)
        };

        // Read the image file as a data URL
        reader.readAsDataURL(uploadedImage);
    };
    console.log(image)
    return (
        <div className="bg-white w-full py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Add a New Offer</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">What you see is what you get</p>
                    <p className="text-lg leading-8 text-gray-600">Below is an editable preview of the offer in desktop and mobile view.</p>

                    {/* Input fields */}
                    <div className="mt-8">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Enter Heading:</h3>
                        <input
                            type="text"
                            placeholder="Lifetime Membership"
                            value={offerHead}
                            onChange={(e) => setOfferHead(e.target.value)}
                            className="w-full p-3 mt-3 border rounded-md"
                        />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Enter Price:</h3>
                        <input
                            type="number"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full p-3 mt-3 border rounded-md"
                        />
                        <input
                            type="number"
                            placeholder="Discount"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                            className="w-full p-3 mt-3 border rounded-md"
                        />
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Change the Features:</h3>
                        {includedFeatures.map((feature, index) => (
                            <input
                                key={index}
                                type="text"
                                value={feature}
                                onChange={(e) => handleFeaturesChange(index, e)}
                                placeholder={`Feature ${index + 1}`}
                                className="w-full p-3 mt-3 border rounded-md"
                            />
                        ))}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Add image:</h3>
                        <input
                            type="file"
                            onChange={handleImageUpload}
                            accept="image/*"
                            className="w-full p-3 mt-3 border rounded-md"
                        />
                    </div>
                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-800 sm:mt-20 lg:mx-0 lg:flex col-span-8 lg:max-w-none bg-gray-900">
                    <div className="mx-auto my-6 max-w-64">
                        <div className="mx-auto px-4">
                            <img src={image} alt="Offer" className="rounded-2xl h-full border border-gray-700" />
                        </div>
                    </div>
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-6xl font-bold tracking-tight text-white">{offerHead ? offerHead : 'Lifetime membership'}</h3>
                        <p className="text-base leading-7 text-transparent ">
                            {'Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda.'}
                        </p>
                        <div className="mt-2 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-400">What’s included</h4>
                            <div className="h-px flex-auto bg-gray-600" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                                <li key={feature} className="flex gap-x-3 items-center">
                                    <CheckIcon className="h-6 w-5 flex-none text-indigo-400" aria-hidden="true" />
                                    <span className="text-white">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:my-auto lg:w-full lg:max-w-md">
                        <div className="rounded-2xl bg-gray-800 py-20 text-center ring-1 ring-inset ring-gray-100/5 lg:flex lg:flex-col lg:justify-center lg:items-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8 my-auto">
                                <div className="flex items-center justify-center mt-4 w-full">
                                    <button
                                        onClick={handleToggle}
                                        className={`relative w-14 h-8 flex items-center rounded-full p-1 transition-colors ${isMonthly ? 'bg-blue-600' : 'bg-gray-400'
                                            }`}
                                    >
                                        <span
                                            className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform ${isMonthly ? 'translate-x-6' : 'translate-x-0'
                                                } transition-transform`}
                                        />
                                    </button>
                                    <span className="ml-3 text-gray-600 font-medium">
                                        {isMonthly ? 'Monthly' : 'Annual'}
                                    </span>
                                </div>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-white">{price ? isMonthly ? price : price * 12 : '100'}</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-300">INR</span>
                                </p>
                                <a
                                    href="#"
                                    className="mt-10 block w-full rounded-md bg-indigo-400 px-3 py-2 text-center text-sm font-semibold text-black shadow-sm hover:bg-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                                >
                                    Get access
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-end'>
                <button className='border-blue-300 border-2 mt-5 rounded-lg px-10 py-4' onClick={() => handleSave()}>Save</button>
            </div>
        </div>
    )
}

export default CardDefault
