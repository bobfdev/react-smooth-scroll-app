import {
    SignInContainer,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './SignInElements';

function SignIn() {
    return (
        <SignInContainer>
            <FormWrap>
                <Icon to='/'>dolla</Icon>
                <FormContent>
                    <Form action='#'>
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required placeholder='Enter Email' />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required placeholder='Enter Password' />
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forgot Password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </SignInContainer>
    )
}

export default SignIn
