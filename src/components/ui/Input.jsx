const Input = ({ label, type, id, name, placeholder, onChange }) => {
    return (
        <div className="form-control">
            <label htmlFor={id} className="label">
                <span className="label-text">{label}</span>
            </label>
            {type == "file" ? (
                <input
                    type="file"
                    id={id}
                    name={name}
                    required
                    className="file-input file-input-bordered w-full"
                    onChange={onChange}
                />
            ) : (
                <input
                    type={type || "text"}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    required
                    className="input input-bordered w-full"
                    onChange={onChange}
                />
            )}
        </div>
    );
};

export default Input;
