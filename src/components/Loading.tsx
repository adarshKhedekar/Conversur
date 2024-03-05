import React from 'react'

const Loading = () => {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="w-10 h-10 p-2 rounded-full animate-spin" style={{ border: '2px solid', borderImage: 'linear-gradient(to right, #FF9505, #F2058B)', borderImageSlice: '1' }}></div>
        </div>
    )
}

export default Loading
