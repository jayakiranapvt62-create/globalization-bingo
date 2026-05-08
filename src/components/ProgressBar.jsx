function ProgressBar({ completed }) {
    const percentage = (completed / 25) * 100;

    return (
        <div className="w-full bg-gray-800 rounded-full h-5 overflow-hidden mb-6">
            <div
                className="bg-cyan-400 h-full transition-all duration-500"
                style={{ width: `${percentage}%` }}
            ></div>
        </div>
    );
}

export default ProgressBar;