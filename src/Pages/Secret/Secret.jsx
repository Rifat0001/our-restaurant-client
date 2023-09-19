const Secret = () => {
    const timelineData = [
        {
            id: 1,
            user: 'John Doe',
            timestamp: '2 hours ago',
            comment: 'This is the first comment.',
        },
        {
            id: 2,
            user: 'Jane Smith',
            timestamp: '1 hour ago',
            comment: 'Here is another comment.',
        },
        {
            id: 2,
            user: 'Jane Smith',
            timestamp: '1 hour ago',
            comment: 'Here is another comment.',
        },
        {
            id: 2,
            user: 'Jane Smith',
            timestamp: '1 hour ago',
            comment: 'Here is another comment.',
        },

        // Add more timeline items as needed
    ];

    return (
        <div className='bg-primary px-40 py-20'>
            <div className="flex item-center gap-4">
                <div className="bg-success w-20 rounded-full h-20 flex items-center justify-center relative">
                    <span>circle</span>

                </div>
                <p>Hi am Rifat</p>
            </div>

            <div className="bg-success border-l-emerald-50 ms-16 w-full h-40">
                hi
                <div className="absolute top-0 left-4 w-1 h-full bg-red-400 "></div>
            </div>
            <div className="absolute top-0 left-4 w-1 h-full bg-gray-400 "></div>
            <div className="relative  h-full w-1 bg-red-500 transform translate-x-[-50%]"></div>
            <div className="relative">

                {timelineData.map((item, index) => (
                    <div key={item.id} className="flex my-6 space-x-4">
                        {index < timelineData.length && (
                            <div className="absolute top-0 left-4 w-1 h-full bg-red-400 "></div>
                        )}
                        <div className="w-8 h-1 mt-4 bg-red-500"></div>
                        <div className="flex-1">
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <div className="text-gray-600 font-medium">{item.user}</div>
                                <div className="text-gray-500">{item.timestamp}</div>
                                <div className="text-gray-700">{item.comment}</div>
                            </div>
                        </div>
                        <div className="w-1 h-4 bg-red-500"></div> {/* This is the line at the bottom of the circle */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Secret;