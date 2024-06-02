import TextField from '@mui/material/TextField';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Image from 'next/image'
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton'
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {  getSession, signIn, useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useRouter } from "next/navigation"
import { LoadingSpinner } from '@/components/loader';
import { Client } from '@/redux';
import { ExtendedUser } from '@/lib/authOptions';
import axios from 'axios';
import { headers } from 'next/headers';




export const LoginForm = () => {
    const router = useRouter()
    
    // State to manage the visibility of the password
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        setIsLoading(true)
        event.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            username: formData.username,
            password: formData.password,
        });

        if (result?.error) {
            setIsLoading(false)
            toast.error("Incorrect username or password.")
        } else {
            const session = await getSession(); // Fetch the updated session

            if(session){
                const user = session.user as ExtendedUser
                const accessToken = user.access_token

                try {
                    const chatSessionResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/chat/chat-session`, {},
                    {
                        headers : {
                            "Authorization" : `Bearer ${accessToken}`
                        }
                    })
                    const chatSessionResponseData = chatSessionResponse.data.data
                    const chatSessionId = chatSessionResponseData.id
                    router.push(`chat/${chatSessionId}`)
                    toast.success("Login Successful")
                } catch (error: any) {
                    const message = error.response?.data?.message || error.response?.data?.data || "An unexpected error occurred.";
                    toast.error(message)
                }
            }
        }
    }

    const handleMouseDownPassword = (event : any) => {
        event.preventDefault();
    };
   
    return (
        <section className="w-full h-full grid place-content-center">
            <div className="font-body flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-auto lg:py-0">
                <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 flex flex-col-reverse gap-12 sm:flex-col">
                        <div className='flex justify-center items-center'>
                            <Image 
                                width = {200}
                                height={100}
                                alt="mandiri-logo" 
                                src="/images/mandiri-icon.png"
                            />
                        </div>
                        <div className='mt-auto bottom-0'>
                            <h1 className="pb-5 text-xl text-center font-bold text-black">
                                Welcome to PTO Chatbot
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <TextField id="user-ad" label="User AD"
                                name="username"
                                value={formData.username} 
                                onChange={handleInputChange}
                                variant="standard" fullWidth/>
                            </div>
                            <div>
                                <TextField
                                    id="standard-password-input"
                                    name="password"
                                    label="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    variant="standard"
                                    fullWidth
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                    </div>
                                    </div>
                                <button 
                                type="submit" 
                                className="w-full text-white 
                                bg-primary-best hover:bg-primary-team focus:ring-4 focus:outline-none 
                                font-medium text-sm  rounded-3xl  py-2.5 text-center disabled:bg-black disabled:bg-opacity-20"
                                disabled={isLoading}>
                                        {
                                            isLoading? 
                                            <LoadingSpinner/>: <div>Loading</div>
                                        }
                                </button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
