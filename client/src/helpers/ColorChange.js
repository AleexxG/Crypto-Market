class ColorChange {
    colorChange(value) {
        if (value <= 0) {
            return 'text-danger';
        }
        else {
            return 'text-success';
        }
    };
};

export default ColorChange;