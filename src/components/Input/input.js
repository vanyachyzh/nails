import { Field, Type, Wrapper } from "./style"


function Input({type}) {
    return (
        <Wrapper>
            <Type>{type}</Type>
            <Field></Field>
        </Wrapper>
    )
}

export default Input

