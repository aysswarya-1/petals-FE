import React from 'react'
import Button from '../shared/Button'

const AuthToggle = ({ mode, setMode }) => {
    return (
        <div className="flex bg-muted rounded-lg p-1 mb-5">
            <button
                onClick={() => setMode('signup')}
                className={`flex-1 py-2 rounded-md text-sm font-medium transition ${mode === 'signup'
                    ? 'bg-rosy-50 text-browny-50 shadow'
                    : 'text-rosy-400 hover:text-rosy-500'
                    }`}
            >
                Create account
            </button>

            <button
                onClick={() => setMode('login')}
                className={`flex-1 py-2 rounded-md text-sm font-medium transition ${mode === 'login'
                    ? 'bg-rosy-50 text-browny-50 shadow'
                    : 'text-rosy-400 hover:text-rosy-500'
                    }`}
            >
                Sign in
            </button>
        </div>
    )
}

export default AuthToggle
