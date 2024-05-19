import { Input } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import TextField from '@mui/material/TextField';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import Image from 'next/image'
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton'
import React, { useState } from 'react';


export const LoginForm = () => {
    var items = [
        "/images/mandiri-icon.png"
    ]
    // State to manage the visibility of the password
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

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
                            <h1 className="pb-5 text-xl text-center font-nunito font-bold leading-tight tracking-tight text-black">
                                Welcome to PTO Chatbot
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <TextField id="user-ad" label="User AD" variant="standard" fullWidth/>
                            </div>
                            <div>
                                <TextField
                                    id="standard-password-input"
                                    label="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    autoComplete="current-password"
                                    variant="standard"
                                    fullWidth
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
                                font-medium text-sm  rounded-3xl  py-2.5 text-center ">
                                        Login
                                </button>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
