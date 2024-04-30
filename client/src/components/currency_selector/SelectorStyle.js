const customStyles = {
    control: (provided) => ({
        ...provided,
        cursor: 'pointer',
        backgroundColor: 'var(--color-input)',
        border: 'none',
        boxShadow: 'none',
        '&:active': {
            boxShadow: 'none',
        },
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? 'var(--color-input)' : 'var(--color-bg)',
        color: state.isSelected ? 'white' : '#6c757d',
        '&:active': {
            backgroundColor: 'var(--color-input)',
            color: 'white',
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'white'
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: 'white',
        '&:hover': {
            color: 'white',
        },
    }),
    menu: (provided) => ({
        ...provided,
        backgroundColor: 'var(--color-bg)',
    }),
};

export default customStyles;