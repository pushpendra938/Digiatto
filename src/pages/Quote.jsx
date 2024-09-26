import React from 'react'

function Quote() {
    return (
        <div className=" grid  xl:pt-[160px] sm:pt-[140px] pt-[100px] xl:pb-[80px] sm:pb-[60px] pb-[50px] 2xl:px-[60px] xl:px-[45px] lg:px-[35px] sm:px-[30px] px-[20px]">
            <div className="text-center">
                <h2 className="wheading text-[#FCBA26]">No Quotes Available</h2>
                <p className="wparagraph">Currently, there are no quotes to display. Please check back later!</p>
            </div>
        </div>

    )
}

export default Quote