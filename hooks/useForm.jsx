import { useState } from "react"

export const useForm = (initialState = {}) => {

    const [formValues, setformValues] = useState(initialState)

    function handleInputChange({ target }) {
        setformValues({
            ...formValues,
            [target.name]: target.value
        })
    }


    return [formValues, handleInputChange]
}
