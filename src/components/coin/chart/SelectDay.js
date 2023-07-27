function SelectDay({ days, setDays }) {
    const dayClick = (e) => {
        e.preventDefault();
        const selectedDay = parseInt(e.target.value);
        setDays(selectedDay);
    };

    const markCurrentDay = (value) => {
        if (days === value) {
            return 'color_bg text-white';
        }
        else {
            return 'bg-transparent text-secondary';
        }
    };

    return (
        <aside className="d-flex justify-content-end my-4">
            <div className="d-flex justify-content-end gap-3 p-2 bg-black bg-opacity-25 rounded-2">
                <button className={`${markCurrentDay(1)} px-2 py-1 rounded-1`}
                        onClick={dayClick} 
                        value={1}>
                        1D
                </button>

                <button className={`${markCurrentDay(7)} px-2 py-1 rounded-1`}
                        onClick={dayClick} 
                        value={7}>
                        7D
                </button>

                <button className={`${markCurrentDay(30)} px-2 py-1 rounded-1`}
                        onClick={dayClick} 
                        value={30}>
                        1M
                </button>

                <button className={`${markCurrentDay(365)} px-2 py-1 rounded-1`}
                        onClick={dayClick} 
                        value={365}>
                        1Y
                </button>
            </div>
        </aside>
    )
}

export default SelectDay;
