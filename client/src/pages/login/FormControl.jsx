import React from "react";
import Type from "prop-types";

const FormControl = React.memo(
    ({
        changeHandler,
        css,
        label,
        length,
        name,
        placeholder,
        required,
        type,
        value,
        validator,
    }) => {
        return (
            <div className={`form-group mb-2 px-0 ${css}`}>
                <label htmlFor={name} className="form-label css-text-secondary" style={{fontWeight:600}}>
                    {label} {required && <span className="text-danger">*</span>}
                </label>
                <input
                    autoComplete="off"
                    type={type}
                    name={name}
                    minLength={length ?? 1}
                    value={value}
                    className={` form-control py-2 ${
                        typeof validator.valid === "boolean"
                            ? validator.valid
                                ? "is-valid"
                                : "is-invalid"
                            : ""
                    }`}
                    required={required ?? false}
                    onChange={changeHandler}
                    placeholder={placeholder ?? ""}
                    id={name}
                />
                {typeof validator?.valid === "boolean" ? (
                    validator?.valid ? 
                        (<div className="valid-feedback" >{validator.message}</div>) : 
                        (<div className="invalid-feedback" >{validator.message}</div>)) : 
                        (<div>&nbsp;</div>)
                }
            </div>
        );
    }
);

export default FormControl;

FormControl.propTypes = {
    changeHandler: Type.func.isRequired,
    css: Type.string,
    label: Type.string.isRequired,
    length: Type.number,
    name: Type.string.isRequired,
    placeholder: Type.string,
    required: Type.bool,
    type: Type.string.isRequired,
    value: Type.string.isRequired,
    validator: Type.oneOfType([ Type.bool, Type.object ]).isRequired,
};
