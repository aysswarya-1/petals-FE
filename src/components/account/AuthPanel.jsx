import React, { useState } from 'react'
import AuthToggle from './AuthToggle'
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const AuthPanel = () => {
    const [mode, setMode] = useState('signup');

    return (
        <div className="bg-white rounded-xl shadow-sm border border-rosy-100 p-6">
            <AuthToggle mode={mode} setMode={setMode} />
            {mode === 'signup' ? (
                <SignupForm setMode={setMode} />
            ) : (
                <LoginForm setMode={setMode} />
            )}
        </div>
    )
}

export default AuthPanel
