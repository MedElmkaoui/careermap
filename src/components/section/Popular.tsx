

const Popular = ()=> {

    const jobCategories = [
        ["Project Manager", "Data Entry", "Customer Service", "Web Design", "Bookkeeping", "App Development"],
        ["Communication", "Analyst", "Graphic Design", "Education", "Sales", "Virtual Assistant"],
        ["Developer", "UI/UX Design", "Marketing", "Call Center", "Accounting"]
    ];
    return (
        <div className="mt-12 py-12 space-y-6 flex flex-col items-center">
            <h1 className="text-2xl lg:text-4xl font-bold text-center">Popular jobs in USA</h1>
            {jobCategories.map((row, rowIndex) => (
                <div key={rowIndex} className="w-full flex flex-wrap justify-center mb-4">
                {row.map((job, index) => (
                    <div
                        key={index}
                        className={`
                            bg-gray text-secondary px-4 py-2 rounded-lg m-2
                            transform transition-all duration-500 ease-out
                            animate-fadein
                        `}
                        style={{
                            animationDelay: `${(rowIndex * row.length + index) * 100}ms`,
                        }}
                    >
                        {job}
                    </div>
                ))}
                </div>
            ))}
            
        </div>
    )
}


export default Popular