import React from 'react';


const BlogCard = (props) =>{
    return(
        <div class="max-w-sm rounded overflow-hidden shadow-lg p-4 blogCard">
                <img class="w-[400px] h-[300px]" src={props.image} alt="Sunset in the mountains"/>
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2 text-center">{props.heading}</div>
                        <p class="">{props.content}
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2 text-center">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 ">{props.hastag1}</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hastag1">{props.hastag2}</span>
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hastag2" >{props.hastag3}</span>                        
                    </div>
        </div>
    )
}

export default BlogCard;