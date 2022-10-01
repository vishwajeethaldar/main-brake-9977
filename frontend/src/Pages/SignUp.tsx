import { Button } from '@chakra-ui/react';
import { useState, FormEvent, ChangeEvent } from 'react'
import { useAppDispatch } from '../features/hooks';
import { addUser } from '../features/users/usersSlice';

type SignCredProp = {
    name: string;
    email: string;
    password: string;
}

const SignUp = () => {
    const [signupcreds, setSignupCred] = useState<SignCredProp>({name: "", email: "", password: ""});
    const dispatch = useAppDispatch();

    const hanldeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignupCred({
          ...signupcreds,
          [name]: value,
        });
      };
    
      const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(signupcreds);
        dispatch(addUser(signupcreds));
      };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                name="name"
                type="text"
                placeholder="Enter name"
                onChange={hanldeChange} />
                <input  
                name="email"
                type="email"
                placeholder="Enter email"
                onChange={hanldeChange}/>
                <input 
                name="password"
                type="password"
                placeholder="Enter password"
                onChange={hanldeChange} />
                <Button type="submit" color="white" borderRadius="0" bgColor="#03a9f4" _hover={{ bg: '#0482bb' }}>SignUp</Button>
            </form>
        </div>
    )
}

export default SignUp