// components/FormComponent.tsx

import React, { useState } from 'react';

interface FormProps {
    labelText: string;
    type: string;
    placeholder: string;
    id: string;
    defaultValue?: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormComponent: React.FC<FormProps> = ({
    labelText,
    type,
    placeholder,
    id,
    defaultValue = '',
    handleChange,
}) => {
    const [formValue, setFormValue] = useState<string>(defaultValue);

    return (

        <div className="py-2">
            <label htmlFor={id} className="p-2 lg:text-[0.8rem] text-[0.68rem] text-purple-600 font-medium">
                {labelText}*
            </label>
            <input
                className="mt-1 lg:text-[0.9rem] text-[0.8rem] block w-full border border-gray-300 p-2  rounded-md "
                type={type}
                placeholder={placeholder}
                id={id}
                name={id}
                value={formValue}
                onChange={(event) => {
                    setFormValue(event.target.value);
                    handleChange(event);
                }}
                required
            />
        </div>
    );
};

export default FormComponent;
