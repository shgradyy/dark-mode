export const useLocalStorage = initialValue => {
    const [value, setValue] = useState(initialValue);
    const handleChanges = updatedValue => {
        setValue(updatedValue);
    };
    return [value, setValue, handleChanges];
};