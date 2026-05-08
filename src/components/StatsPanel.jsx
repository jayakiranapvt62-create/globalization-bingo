function StatsPanel({ completed }) {
    return (
        <div className="text-center mb-6">
            <h2 className="text-2xl text-cyan-300 font-bold">
                Completed: {completed} / 25
            </h2>
        </div>
    );
}

export default StatsPanel;